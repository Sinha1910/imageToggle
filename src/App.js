import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button-component/button-component';
import ImageComponent from './image-component/image-component';


class App extends Component {
    constructor(props){
      super(props);
      this.onClickDoThis = this.onClickDoThis.bind(this);
      this.state = {
        showImage: false,
        buttonText: "Click Me"
      }
    }

    onClickDoThis(){
      this.setState({
        showImage: !this.state.showImage
      });
    }

    render(){
      console.log(this.state)
      return (
        <div className="App">
          <div className="button-container">
            <Button clickThis={this.onClickDoThis}/>
          </div>
            {
              this.state.showImage 
              ? 
              <div className="image container" >
                <ImageComponent/> 
              </div>
              : 
              null
            }
        </div>
      );
    }
}

export default App;
