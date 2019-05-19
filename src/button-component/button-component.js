import React, { Component } from 'react';
import './button-component.css';

class Button extends Component{
  render () {
    console.log(this.props)
      return (
        <button
          className="button-margin butn"
          onClick={this.props.clickThis}>Click Me</button>
      );
    }
  };

export default Button;