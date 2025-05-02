document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color-btn');
    const body = document.body;
    const animImage = document.getElementById('animImage');
    const animateBtn = document.getElementById('animateBtn');
  
    // Load saved color from localStorage and apply
    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) {
      applyThemeColor(savedColor);
      markSelectedButton(savedColor);
    }
  
    // Add click listeners to color buttons
    colorButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const color = btn.getAttribute('data-color');
        applyThemeColor(color);
        localStorage.setItem('themeColor', color);
        markSelectedButton(color);
      });
    });
  
    // Apply theme color to body background
    function applyThemeColor(color) {
      body.style.backgroundColor = color + '20'; // add transparency for subtle background
    }
  
    // Mark the selected button visually
    function markSelectedButton(color) {
      colorButtons.forEach(btn => {
        btn.classList.toggle('selected', btn.getAttribute('data-color') === color);
      });
    }
  
    // Animate image rotation when button clicked
    animateBtn.addEventListener('click', () => {
      // Remove class if already present to restart animation
      animImage.classList.remove('rotate');
  
      // Trigger reflow to restart animation
      void animImage.offsetWidth;
  
      // Add class to start rotation animation
      animImage.classList.add('rotate');
    });
  });
  