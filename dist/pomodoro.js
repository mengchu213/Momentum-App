const openPomodoroModalButton = document.querySelector('.open-pomodoro-modal');
const pomodoroModal = document.querySelector('.pomodoro-modal');
const startButton = document.querySelector('.start-timer');
const stopButton = document.querySelector('.stop-timer');
const resetButton = document.querySelector('.reset-timer');
const timerDisplay = document.querySelector('.timer');
const exitButton = document.querySelector('.exit-button');
const incrementSessionButton = document.querySelector('.increment-session');
const decrementSessionButton = document.querySelector('.decrement-session');
const incrementBreakButton = document.querySelector('.increment-break');
const decrementBreakButton = document.querySelector('.decrement-break');
const sessionLengthDisplay = document.getElementById('session-length');
const breakLengthDisplay = document.getElementById('break-length');
const breakButton = document.getElementById('break-button');
const statusLabel = document.getElementById('status-label');

function updateStatusLabel() {
  statusLabel.textContent = breakActive ? 'Break' : 'Session';
}

let breakActive = false;
breakButton.addEventListener('click', () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  } else {
    breakActive = !breakActive;
    updateStatusLabel();

    if (breakActive) {
      breakButton.textContent = 'Stop Break';
      timeRemaining = breakLength * 60;
    } else {
      breakButton.textContent = 'Break Time';
      timeRemaining = sessionLength * 60;
    }

    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeRemaining--;

      if (timeRemaining < 0) {
        breakActive = !breakActive;
        updateStatusLabel();
        timeRemaining = breakActive ? breakLength * 60 : sessionLength * 60;
      }

      updateTimerDisplay();
    }, 1000);
  }
});


breakButton.addEventListener('click', () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  } else {
    breakActive = !breakActive;

    if (breakActive) {
      breakButton.textContent = 'Stop Break';
      timeRemaining = breakLength * 60;
    } else {
      breakButton.textContent = 'Start Break';
      timeRemaining = sessionLength * 60;
    }

    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeRemaining--;

      if (timeRemaining < 0) {
        breakActive = !breakActive;
        timeRemaining = breakActive ? breakLength * 60 : sessionLength * 60;
      }

      updateTimerDisplay();
    }, 1000);
  }
});


let sessionLength = 25;
let breakLength = 5;

incrementSessionButton.addEventListener('click', () => {
  sessionLength++;
  sessionLengthDisplay.textContent = sessionLength;
  if (!timerInterval) {
    timeRemaining = sessionLength * 60;
    updateTimerDisplay();
  }
});

decrementSessionButton.addEventListener('click', () => {
  if (sessionLength <= 1) return;
  sessionLength--;
  sessionLengthDisplay.textContent = sessionLength;
  if (!timerInterval) {
    timeRemaining = sessionLength * 60;
    updateTimerDisplay();
  }
});

incrementBreakButton.addEventListener('click', () => {
  breakLength++;
  breakLengthDisplay.textContent = breakLength;
});

decrementBreakButton.addEventListener('click', () => {
  if (breakLength <= 1) return;
  breakLength--;
  breakLengthDisplay.textContent = breakLength;
});


let timerInterval;
let timeRemaining = 25 * 60;

function showModal() {
  pomodoroModal.style.display = 'flex';
}

function closeModal() {
   pomodoroModal.style.display = 'none';
}

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    if (timeRemaining === 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert('Pomodoro timer completed!');
    }
  }, 1000);
}



function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  timeRemaining = 25 * 60;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

openPomodoroModalButton.addEventListener('click', showModal);
exitButton.addEventListener('click', closeModal);
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);