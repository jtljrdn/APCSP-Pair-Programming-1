//DOM consts
const selectForm = document.getElementById('word-select-form');
const wordSelect = document.getElementById('word-select');
const vocabDisplay = document.getElementById('vocab-display');
const vocabWord = document.getElementById('vocab-word')
const vocabDef = document.getElementById('vocab-def');
const vocabPic = document.getElementById('vocab-pic');
const favBtn = document.getElementById('btn-favorite');
const favoritesList = document.getElementById('fav-list');
const favHead = document.getElementById('fav-header');

//DOM event listeners
selectForm.addEventListener('submit', function(event){showWord(event, wordSelect.value);})


let words = [
    {word: "simile", def: "(n.) A figure of speech involving the comparison of one thing to another using like or as.", pic: 'similie.jpg', favorite: false},
    {word: "imagery", def: "(n.) Visually descrptive or figurative language.", pic: 'imagery.jpg', favorite: false},
    {word: "metaphor", def: "(n.) Something regarded as representative or symbolic of something else. ", pic: 'metaphor.jpg', favorite: false},
    {word: "onomatopoeia", def: "(n.) The formation of a word from a sound associated with what is named. ", pic: 'onomatopeoia.jpg', favorite: false},
    {word: "personification", def: "(n.) The attribute of a personal nature or human characteristics to something nonhuman. ", pic: 'personificaton.jpg', favorite: false},
    {word: "symbolism", def: "(n.) The use of symbols to represent ideas or qualities.", pic: 'symbolism.jpg', favorite: false},
    {word: "tone", def: "(n.) The general character or attitude of a place, piece of writing, situation, ect. ", pic: 'tone.jpg', favorite: false},
    {word: "foreshadow", def: "(v.) Be a warning or indiction of a future event.", pic: 'Foreshadow.jpg', favorite: false},
    {word: "motif", def: "(n.) A distinctive feature or dominant idea in an artist or literary composition.", pic: 'motif.jpg', favorite: false},
    {word: "point of view", def: "(n.) The narrator's poistion in relation to a story being told.", pic: 'pov.jpg', favorite: false},
    {word: "repetition", def: "(n.) The recurrence of an action, event, word, or phrase.", pic: 'repetition.jpg', favorite: false},
    {word: "paradox", def: "(n.) Statement, or situation that seems self-contradictory but may be logain or true or atleaast contain an elemnt of truth.", pic: 'paradox.jpg', favorite: false},
    {word: "oxymoron", def: "(n.) A figure of speech in which apperently contradictory terms appear in a conjunction.", pic: 'oxymoron.jpg', favorite: false},
]