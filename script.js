const introText = document.getElementById('intro-text');
const changeTextButton = document.getElementById('change-text-btn');

const defaultIntro = 'A small personal space for coding experiments, short notes, and mini tools that grow over time.';
const alternateIntro = 'Right now I am collecting tiny tools, writing ideas, and code tests in one calm place.';

changeTextButton.addEventListener('click', () => {
  const showingDefault = introText.textContent.trim() === defaultIntro;

  if (showingDefault) {
    introText.textContent = alternateIntro;
    changeTextButton.textContent = 'Back to main intro';
  } else {
    introText.textContent = defaultIntro;
    changeTextButton.textContent = 'Show another intro';
  }
});
