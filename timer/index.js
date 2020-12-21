const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("TImer has started!");
  },
  onTick() {
    console.log("Timer has ticked down");
  },
  onComplete() {
    console.log("Timer has completed!");
  },
});
