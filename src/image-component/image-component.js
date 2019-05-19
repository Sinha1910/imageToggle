import React, { Component } from 'react';
import './image-component.css';

class ImageComponent extends Component{
  render () {
      return (
        <img
          className=""
          width="500" height="500" src="https://www.gstatic.com/webp/gallery/1.jpg"/>
      );
    }
  };

export default ImageComponent;