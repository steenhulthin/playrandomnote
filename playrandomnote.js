function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


var notes = [ { 'note' : 'E', 'freq' : '182.41'}, { 'note' : 'A', 'freq' : '110' } ];

context = new AudioContext;
oscillator = context.createOscillator();

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



document.getElementById("play").addEventListener("click", play, false);
document.getElementById("stop").addEventListener("click", stop , false);

