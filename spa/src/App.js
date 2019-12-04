import React, { Component } from 'react';
import './App.css';
import Main from './Components/main.component'


class App extends Component {
  state = {
    countries: [
      {
        "code": "AU",
        "name": "Australia"
      },
      {
        "code": "BR",
        "name": "Brazil"
      },
    ],
  }

  render() {
    return (
      <div className="App">
        <Main data={this.state}></Main>
      </div>)
  }
}

export default App;
