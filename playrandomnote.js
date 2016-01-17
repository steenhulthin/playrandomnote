context = new AudioContext;
oscillator = context.createOscillator();
oscillator.frequency.value = 200;

oscillator.connect(context.destination);

function play() {
    oscillator.start(0);
}

function stop() {
    oscillator.stop(0);
}



document.getElementById("play").addEventListener("click", play, false);
document.getElementById("stop").addEventListener("click", stop, false);

