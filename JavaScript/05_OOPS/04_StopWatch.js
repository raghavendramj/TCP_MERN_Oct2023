//Exercise :- OOPS Javascript
//Create a stopwatch
//private variables -> startTime, endTime, duration, running
//1. Start
//2. Stop
//3. Reset
//4. Current Duration

function StopWatch() {
  var startTime,
    endTime,
    duration = 0,
    running = false;

  this.start = function () {
    if (running) {
      throw new Error("Stop watch already running!");
    }
    running = true; //Now set to true, so that next time it can be stopped!
    duration = 0;
    console.log("START :: Duration :- ", duration);
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      throw new Error("Stop watch not started!");
    }
    running = false; //Now set to true, so that next time it can be stopped!
    endTime = new Date();
    var seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    console.log("Currrent ran time :- ", seconds);
    duration += seconds;
    console.log("Overall duration:- ", duration);
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    (duration = 0), (running = false);
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      var tillNow = null;

      if (!running && duration == 0) {
        return 0; //Stop watch not even started once!
      }

      if (running) {
        tillNow = new Date(); // When clock is still running!
      } else {
        tillNow = endTime; // When clock has already Stopped!
      }
      // var tillNow = running
      //  ? new Date() // When clock is still running!
      //  : endTime; // When clock has already Stopped!
      var ranSeconds = (tillNow.getTime() - startTime.getTime()) / 1000;
      return ranSeconds;
    },
  });
}

var stopWatch = new StopWatch();
stopWatch.start();
stopWatch.duration;
stopWatch.stop();
stopWatch.reset();
