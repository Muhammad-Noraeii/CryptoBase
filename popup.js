document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    encodeButton: document.getElementById('encodeBtn'),
    decodeButton: document.getElementById('decodeBtn'),
    inputText: document.getElementById('inputText'),
    resultText: document.getElementById('resultText'),
    body: document.body,
    toggleButton: document.getElementById('toggleDarkMode'),
    copyButton: document.getElementById('copyBtn')
  };

  const icon = elements.toggleButton.querySelector('i');

  const updateResultText = (message) => {
    elements.resultText.value = message;
  };

  const encodeBase64 = () => {
    const text = elements.inputText.value.trim();
    updateResultText(text ? btoa(text) : 'Please enter text to encode.');
  };

  const decodeBase64 = () => {
    const text = elements.inputText.value.trim();
    if (text) {
      try {
        updateResultText(atob(text));
      } catch {
        updateResultText('Invalid Base64 string');
      }
    } else {
      updateResultText('Please enter text to decode.');
    }
  };

  const toggleDarkMode = () => {
    elements.body.classList.toggle('dark-mode');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
  };

  const copyResult = () => {
    elements.resultText.select();
    document.execCommand('copy');
    alert('Result copied to clipboard!');
  };

  elements.encodeButton.addEventListener('click', encodeBase64);
  elements.decodeButton.addEventListener('click', decodeBase64);
  elements.toggleButton.addEventListener('click', toggleDarkMode);
  elements.copyButton.addEventListener('click', copyResult);
});
