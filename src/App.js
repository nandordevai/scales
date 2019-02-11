import React, { Component } from 'react';

import { scales } from './scales';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{scales[2].names.join(', ')}</h1>
      </div>
    );
  }
}

export default App;
