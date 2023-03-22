const challengeTextElement = document.querySelector('.challenge-text');
const challengeButtonElement = document.querySelector('.challenge-button');
const challengeCompletedMessageElement = document.querySelector('.challenge-completed-message');

const challenges = [
  'Go for a 30-minute walk.',
  'Write down three things you are grateful for.',
  'Drink at least 8 glasses of water.',
  'Meditate for 10 minutes.',
  'Read for 30 minutes.',
  'Call a friend or family member.',
  'Write a thank-you note to someone.',
];

function getRandomChallenge() {
  return challenges[Math.floor(Math.random() * challenges.length)];
}

function displayDailyChallenge() {
  const challenge = getRandomChallenge();
  challengeTextElement.textContent = challenge;
}

function markChallengeAsComplete() {
  challengeButtonElement.classList.add('hidden');
  challengeTextElement.classList.add('strikethrough');
  challengeCompletedMessageElement.classList.remove('hidden');
}

challengeButtonElement.addEventListener('click', markChallengeAsComplete);

displayDailyChallenge();
