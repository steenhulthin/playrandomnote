(function() {
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


var notes = [ { 'note' : 'E', 'freq' : '82.41'}, { 'note' : 'A', 'freq' : '110' } ];

context = new AudioContext;
oscillator = context.createOscillator();
oscillator.type = 'square';

var randomNumber = getRandomInt(0,2);

oscillator.frequency.value = notes[randomNumber].freq;
alert(randomNumber + ' ' + notes[randomNumber].note);

oscillator.connect(context.destination);

function play() {
    oscillator.start(0);
}

function stop() {
    oscillator.stop(0);
}

function newnote() {
    //check for started oscillator;
    //oscillator.frequency.value = notes[randomNumber].freq;
}

document.getElementById("play").addEventListener("click", play, false);
document.getElementById("stop").addEventListener("click", stop , false);
document.getElementById("newnote").addEventListener("click", newnote , false);
} ())
