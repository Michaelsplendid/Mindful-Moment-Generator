const generateButton = document.getElementById('generateButton');
const mindfulMoment = document.getElementById('mindfulMoment');
const body = document.body;

const mindfulMoments = [
    'Take three deep breaths in and out.',
    'Close your eyes and focus on your breath for one minute.',
    'List three things you are grateful for right now.',
    'Stretch your arms and legs for 30 seconds.',
    'Repeat a positive affirmation: "I am calm and in control."',
    'Observe your surroundings and name five things you see.',
    'Practice mindfulness by eating a snack slowly and savoring each bite.',
    'Do a quick body scan, focusing on each part of your body and releasing tension.'
];

generateButton.addEventListener('click', generateMindfulMoment);

function generateMindfulMoment() {
  const randomIndex = Math.floor(Math.random() * mindfulMoments.length);
  const moment = mindfulMoments[randomIndex];
  mindfulMoment.textContent = moment;
}

const toggleButton = document.createElement('button');
toggleButton.textContent = 'Change Mode';
toggleButton.className = 'toggle-button';
document.querySelector('.generator').appendChild(toggleButton);

const userPreferredMode = localStorage.getItem('preferredMode') || '';

if (userPreferredMode) {
  body.classList.add(userPreferredMode);
  generateButton.classList.add(userPreferredMode);
  toggleButton.classList.add(userPreferredMode);
}

toggleButton.addEventListener('click', toggleMode);

function toggleMode() {
  body.classList.toggle('change-mode');
  generateButton.classList.toggle('change-mode');
  toggleButton.classList.toggle('change-mode');

  const currentMode = generateButton.classList.contains('change-mode') ? 'change-mode' : '';
  localStorage.setItem('preferredMode', currentMode);
}