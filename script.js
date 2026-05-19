const audioFileInput = document.getElementById('audio-file');
const fileNameText = document.getElementById('file-name');

if (audioFileInput && fileNameText) {
  audioFileInput.addEventListener('change', () => {
    const selectedFile = audioFileInput.files && audioFileInput.files[0];
    fileNameText.textContent = selectedFile ? `Selected file: ${selectedFile.name}` : 'No file selected.';
  });
}
