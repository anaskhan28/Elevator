const elevator = document.querySelector('.elevator');
const levels = document.querySelectorAll('.level');
const upButton = document.querySelector('.up');
const downButton = document.querySelector('.down');

let currentLevel = 0; 


const audio = new Audio('elevator.mp3');

upButton.addEventListener('click', () => {
  if (currentLevel === 0) {
 
    moveElevator(1, 5000);
  } else if (currentLevel === 1) {
    
    moveElevator(2, 10000);
  }

  // Play audio
  audio.currentTime = 0; // Reset audio to start if it is still playing
  audio.play();
});

downButton.addEventListener('click', () => {
  if (currentLevel === 2) {
    // Move to level 1
    moveElevator(1, 5000);
  } else if (currentLevel === 1) {
    // Move to ground level
    moveElevator(0, 10000);
  }

  
  audio.currentTime = 0; 
  audio.play();
});

function moveElevator(level, duration) {
  // Disable buttons while moving
  upButton.classList.add('disabled');
  downButton.classList.add('disabled');

  // Animate elevator movement
  elevator.style.transition = `bottom ${duration}ms ease-in-out`;
  elevator.style.bottom = `${level * 100}px`;

  // Update current level after movement is complete
  setTimeout(() => {
    currentLevel = level;
    updateButtons();
  }, duration);
}

function updateButtons() {
  upButton.classList.remove('disabled');
  downButton.classList.remove('disabled');

  if (currentLevel === 0) {
    // Only allow up button on ground level
    downButton.classList.add('disabled');
  } else if (currentLevel === 1) {
    // Allow both up and down buttons on level 1
  } else if (currentLevel === 2) {
    // Only allow down button on level 2
    upButton.classList.add('disabled');
  }
}