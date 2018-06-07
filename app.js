import { scales } from './scales.js';

document.querySelector('.scales').innerHTML = $scales();

function $scales() {
    return scales
        .map(scale => $scale(scale))
        .join('');
}

function $scale(scale) {
    return `
<section>
<h2>${scale.names.join(', ')}</h2>
${$notes(scale.notes)}
</section>
    `;
}

function $notes(notes) {
    return `
<ul class="scale__notes">
${notes.map(note => `<li class="scale__note scale__note--${note}"></li>`).join('')}
</ul>
`;
}
