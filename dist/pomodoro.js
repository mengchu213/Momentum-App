const openPomodoroModalButton = document.querySelector('.open-pomodoro-modal');
    const pomodoroModal = document.querySelector('.pomodoro-modal');
    const startButton = document.querySelector('.start-timer');
    const stopButton = document.querySelector('.stop-timer');
    const resetButton = document.querySelector('.reset-timer');
    const timerDisplay = document.querySelector('.timer');
    const exitButton = document.querySelector('.exit-button');

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