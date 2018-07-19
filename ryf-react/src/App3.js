import React, { Component } from 'react';
// super 父类的构造函数
import './App.css';
class NoteList extends Component {
  // constractor (props) {
  //   super(props)
  // }
  render () {
    return(
      <ol>
        {this.props.children.map((child,index) => <li key={index}>{child}</li>) }
      </ol>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteList>
          <span>hello</span>
          <span>world</span>
        </NoteList>
      </div>
    );
  }
}

export default App;
// vue里的slot在react里面叫做children