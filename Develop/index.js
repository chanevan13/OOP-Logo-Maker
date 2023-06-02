const inquirer = require('inquirer');
const fs = require('fs');

class Shape {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }

  render() {
    throw new Error('render method must be implemented by subclasses');
  }

  renderText() {
    throw new Error('renderText method must be implemented by subclasses');
  }
}

class Circle extends Shape {
  constructor(color, text) {
    super(color, text);
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }

  renderText() {
    return `<text x="150" y="150" fill="${this.color}" text-anchor="middle">${this.text}</text>`;
  }
}

class Triangle extends Shape {
  constructor(color, text) {
    super(color, text);
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }

  renderText() {
    return `<text x="150" y="150" fill="${this.color}" text-anchor="middle">${this.text}</text>`;
  }
}

class Rectangle extends Shape {
  constructor(color, text) {
    super(color, text);
  }

  render() {
    return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.color}" stroke-width="5"/>`;
  }

  renderText() {
    return `<text x="150" y="150" fill="${this.color}" text-anchor="middle">${this.text}</text>`;
  }
}

const generateLogo = ({ textColor, shape, shapeColor, text }) => {
    let logo;
    switch (shape) {
      case 'circle':
        logo = new Circle(shapeColor, text);
        break;
      case 'triangle':
        logo = new Triangle(shapeColor, text);
        break;
      case 'rectangle':
        logo = new Rectangle(shapeColor, text);
        break;
      default:
        throw new Error('Invalid shape');
    }
  
    logo.textColor = textColor; // Set the text color for the logo
  
    const svg = `
      <svg width="300" height="200">
        ${logo.render()}
        ${logo.renderText()}
      </svg>
    `;
  
    fs.writeFile('logo.svg', svg, (err) =>
      err ? console.log(err) : console.log('Successfully created SVG Logo')
    );
  };

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Please enter three characters',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What color do you want your text to be?',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Please choose a shape: Circle, Triangle, or Rectangle',
      choices: ['circle', 'triangle', 'rectangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What color is your shape?',
    },
  ])
  .then((answers) => {
    generateLogo(answers);
  });