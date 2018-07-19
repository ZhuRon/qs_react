import React, { Component } from 'react';

import './App.css';
// es6 语法 
class LikeButton extends Component{
  state = {
    liked: false
  }
  handleClick (){
    console.log(this)
  }
  render () {
    const text = this.state.Liked? 'like': 'don\'t like'
    return (
      <p onClick={() => {this.handleClick()}}>
        You { text } this click to toggle
      </p>
    )
  }
}




class App extends Component {
  handleClick(){
    this.refs.myTextInput.focus()
  }
  render() {
    return (
      <div className="App">
        <input type="text" ref="myTextInput"/>
        <input type="button" ref="focus the text input" onClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;

