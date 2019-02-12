import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let div = null;

beforeEach(() => {
  div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without crashing', () => {
  ReactDOM.unmountComponentAtNode(div);
});

it('shows the names of the selected scale', () => {
  expect(div.querySelector('h1').textContent).toBe('Bhairav, Double harmonic major');
});

it('shows the intervals of the selected scale', () => {
  expect(div.querySelector('.intervals').textContent).toBe('0, 1, 4, 5, 7, 8, 11');
});

it('shows the notes of the selected scale', () => {
  expect(div.querySelector('.scale').textContent).toBe('C, Db, E, F, G, Ab, B');
});

it('creates a scale from intervals', () => {
  expect(App.prototype.createScale([0, 1])).toEqual(['C', 'Db']);
});

it('creates a scale with a given root note', () => {
  expect(App.prototype.createScale([0, 1], 'D')).toEqual(['D', 'Eb']);
  expect(App.prototype.createScale([0, 2, 3, 5, 7, 9, 10], 'D')).toEqual(['D', 'E', 'F', 'G', 'A', 'B', 'C']);
});

it('creates a scale with proper sharp and flat notes', () => {
  expect(App.prototype.createScale([0, 2, 3], 'E')).toEqual(['E', 'F#', 'G']);
});
