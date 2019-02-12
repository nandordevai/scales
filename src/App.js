import React, { Component } from 'react';

import { scales } from './scales';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{scales[2].names.join(', ')}</h1>
        <div className="intervals">{scales[2].intervals.join(', ')}</div>
        <div className="scale">{this.createScale(scales[2].intervals).join(', ')}</div>
      </div>
    );
  }

  createScale(intervals, root = 'C') {
    const allNotes = [
      'C',
      ['C#', 'Db'],
      'D',
      ['D#', 'Eb'],
      'E',
      'F',
      ['F#', 'Gb'],
      'G',
      ['G#', 'Ab'],
      'A',
      ['A#', 'Bb'],
      'B'
    ];
    const extendedScale = allNotes.concat(allNotes);
    const transposeBy = allNotes.indexOf(root);
    return intervals
      .map(_ => extendedScale[_ + transposeBy])
      .map((_, i) => {
        if (!Array.isArray(_)) {
          return _;
        }
        if ((i < intervals.length - 1) && (_[1][0] === extendedScale[intervals[i + 1] + transposeBy])) {
          return _[0];
        }
        return _[1];
      });
  }
}

export default App;
