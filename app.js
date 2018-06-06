import { scales } from './scales.js';

document.querySelector('.scales').innerHTML = $scales();

function $scales() {
    return scales
        .map(scale => $scale(scale))
        .join('');
}

function $scale(scale) {
    return `<li>${scale.names.join(', ')}: ${scale.notes.join(', ')}</li>`;
}
