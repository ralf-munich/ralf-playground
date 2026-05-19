const introText = document.getElementById('intro-text');
const changeTextButton = document.getElementById('change-text-btn');

changeTextButton.addEventListener('click', () => {
  introText.textContent = 'Thanks for visiting! I just changed this text with JavaScript.';
});
