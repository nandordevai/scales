import { scales } from './scales.js'
import { html } from './template.js'

const noteNames = [
    ['C'],
    ['C#', 'Db'],
    ['D'],
    ['D#', 'Eb'],
    ['E'],
    ['F'],
    ['F#', 'Gb'],
    ['G'],
    ['G#', 'Ab'],
    ['A'],
    ['A#', 'Bb'],
    ['B'],
]

function $scales() {
    return scales
        .map(scale => $scale(scale))
        .join('')
}

function $scale(scale) {
    return `
<section>
<h1>${scale.names.join(', ')}</h1>
<ul class="scale__notes">
${$noteNames(scale.notes)}
</ul>
</section>
    `
}

function $noteNames(notes, root = 'C') {
    return html`
${notes.map((note) => $getNextNoteName(note))}
`
}

function $getNextNoteName(note) {
    return html`
<li class="scale__note scale__note--name">
${noteNames[note][0].replace('#', '♯').replace('b', '♭')}
</li>
`.trim()
}

function $absoluteScale(notes) {
    return `
<ul class="scale__notes">
${notes.map(note => `<li class="scale__note scale__note--${note}"></li>`).join('')}
</ul>
`
}

document.querySelector('.scales').innerHTML = $scales()
