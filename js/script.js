let taskDate = document.querySelector(".date");
let taskMonth = document.querySelector(".month");
let taskYear = document.querySelector(".year");


let timerSection = document.querySelector("#timer-section");
let confettiSection = document.getElementById("confetti-section");


let animationSection = document.getElementsByClassName("animation");


const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


// here are some confetti animations
//confetti Function - 1
function launchConfetti() {
  var duration = 30 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    // launch a few confetti from the left edge
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    // keep going until we are out of time
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

//confetti Function - 2
function realastic() {
  const count = 200,
    defaults = {
      origin: { y: 0.7 },
    };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

//confetti Function - 3
function valentine() {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585", "ff0000"],
  };

  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
  });

  confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
  });
}

//confetti Function - 4
function emoji() {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 20,
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 1.2,
      shapes: ["circle", "square"],
      colors: ["#ff0000, #a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 300);
  setTimeout(shoot, 500);
  setTimeout(shoot, 700);
  setTimeout(shoot, 900);
  setTimeout(shoot, 1100);
}

//confetti Function - 5
function fireworks() {
  const duration = 30 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

//confetti Function - 6
function schoolPride() {
  const end = Date.now() + 30 * 1000;

  // go Buckeyes!
  const colors = ["#bb0000", "#ffffff"];

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });

    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

//confetti Function - 7

//confetti Function - 8

//showing different confetti animations at different time interval
function confettiInterval() {
  let valCon;

  schoolPride();

  setTimeout(() => {
    valCon = setInterval(valentine, 3 * 1000);
  }, 31 * 1000);

  setTimeout(() => {
    clearInterval(valCon);
    launchConfetti();
  }, 63 * 1000);

  setTimeout(() => {
    clearInterval(valCon);
    valCon = setInterval(realastic, 3 * 1000);
  }, 95 * 1000);

  setTimeout(() => {
    clearInterval(valCon);
    valCon = setInterval(emoji, 3 * 1000);
  }, 127 * 1000);

  setTimeout(() => {
    clearInterval(valCon);
    valCon = "";
    fireworks();
  }, 159 * 1000);
}










// here we set our deadline/task date
let TDate = 3;   // User date
let TMonth = 8;   // User Month
let TMonthName = months[TMonth - 1];
let TYear = 2023;  // User Year
let time = "03:28:00"; //Alaways Fixed "23:59:59" no need to change 
let deadline = new Date(`${TMonthName} ${TDate} ${TYear} ${time}`);

//-------------


//------------


// today date and time
const currentDate = new Date();

// const todayDate = new Date(`${currentDate.getMonth() + 1} ${currentDate.getDate()} ${currentDate.getFullYear()}`);
const currentTime1 =
  currentDate.getHours() * (1000 * 60 * 60) +
  currentDate.getMinutes() * (1000 * 60) +
  currentDate.getSeconds() * 1000;
// let deadlineDate = new Date(`${TMonthName} ${TDate} ${TYear}`);
let deadlineTime =
  deadline.getHours() * (1000 * 60 * 60) +
  deadline.getMinutes() * (1000 * 60) +
  deadline.getSeconds() * 1000;
console.log(deadlineTime - currentTime1);

// show confetti when date and month matched
function showConfetti() {
  if (
    deadline.getDate() === currentDate.getDate() &&
    deadline.getMonth() + 1 === currentDate.getMonth() + 1 &&
    deadlineTime - currentTime1 <= 0
  ) {
    //show confetti and hide timer

    timerSection.classList.add("hidden");
    // confettiCanvas.classList.remove("hidden");
    confettiSection.classList.remove("hidden");
    confettiInterval();
    const repeatConfetti = setInterval(() => {
      confettiInterval();
      // }, 86.4 * 1000);
    }, 190.08 * 1000);
  } else {
    //hide confetti and show timer
    timerSection.classList.remove("hidden");
    // confettiCanvas.classList.add("hidden");
    confettiSection.classList.add("hidden");
  }
}
showConfetti();

function getValues() {
  // get the values from localstorage
  // set month, year etc
  const dateStr = localStorage.getItem("deadline");
  
  if (deadline - currentDate <= 0 && deadlineTime - currentTime1 <= 0) {
    deadline.setFullYear(currentDate.getFullYear() + 1);
  } else if (deadline - currentDate <= 0) {
    deadline.setFullYear(currentDate.getFullYear());
  }
  

  resetTimer();
}

const resetTimer = () => {
  TDate = deadline.getDate();
  TMonth = deadline.getMonth() + 1;
  TYear = deadline.getFullYear();
  TMonthName = months[TMonth - 1];
  time = `${deadline.getHours()}:${deadline.getMinutes()}:${deadline.getSeconds()}`;

  const newDate = new Date(`${TMonthName} ${TDate} ${TYear} ${time}`).getTime();

  const countdown = setInterval(() => {
    const date = new Date().getTime(); // current time in milliseconds

    const diff = newDate - date;
    // console.log("diff", diff);

    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const daysdiff = diff / (1000 * 60 * 60 * 24);
    const remainingWeeks = parseInt(daysdiff / 7);
    const remainingDays = parseInt(daysdiff % 7);

    document.querySelector(".weeks").innerHTML =
      remainingWeeks < 10 ? "0" + remainingWeeks : remainingWeeks;
    document.querySelector(".days").innerHTML =
      remainingDays < 10 ? "0" + remainingDays : remainingDays;
    document.querySelector(".hours").innerHTML =
      hours < 10 ? "0" + hours : hours;
    document.querySelector(".minutes").innerHTML =
      minutes < 10 ? "0" + minutes : minutes;
    document.querySelector(".seconds").innerHTML =
      seconds < 10 ? "0" + seconds : seconds;

    if (
      hours === 0 &&
      minutes === 0 &&
      remainingDays === 0 &&
      remainingWeeks === 0 &&
      seconds <= 10
    ) {
      document.querySelector("#timer-section").classList.add("hidden");
      document.querySelector(".clock").classList.remove("hidden");
      document.querySelector(".clock").innerHTML = seconds;
    }

    if (diff < 0) {
      // --------------------------------Text Animation Confetti -------------------------

      //show confetti and hide timer
      document.querySelector(".clock").classList.add("hidden");

      document.querySelector("#timer-section").classList.add("hidden");
      // document.getElementById("confetti").classList.remove("hidden");
      document.getElementById("confetti-section").classList.remove("hidden");

      // store in localstorage
      deadline.setFullYear(deadline.getFullYear() + 1);
      // localStorage.setItem("deadline", deadline.toString());

      // last Edit
      confettiInterval();
      // Call the function every 82 seconds
      const repeatConfetti = setInterval(() => {
        confettiInterval();
      }, 190.08 * 1000);

      setTimeout(() => {
        // hide confetti and show timer
        clearInterval(repeatConfetti);

        document.getElementById("timer-section").classList.remove("hidden");
        document.getElementById("confetti-section").classList.add("hidden");
        document.getElementById("confetti").classList.add("hidden");
      }, 8400000);

      clearInterval(countdown);
      resetTimer();
    }
  }, 1000);
};

getValues();
// resetTimer();
