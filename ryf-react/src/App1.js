import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    const names = ['Alice','Emily','kate']
    return (
      <div className="App">
        <ul>
          {
            names.map((name,index)=>{
              return(
                <div key={index}>
                  hello,{name}
                </div>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
