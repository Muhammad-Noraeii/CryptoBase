document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    encodeButton: document.getElementById('encodeBtn'),
    decodeButton: document.getElementById('decodeBtn'),
    encryptButton: document.getElementById('encryptBtn'),
    decryptButton: document.getElementById('decryptBtn'),
    inputText: document.getElementById('inputText'),
    resultText: document.getElementById('resultText'),
    body: document.body,
    toggleButton: document.getElementById('toggleDarkMode'),
    copyButton: document.getElementById('copyBtn'),
    passwordInput: document.getElementById('password')
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

  const encryptText = () => {
    const text = elements.inputText.value.trim();
    const password = elements.passwordInput.value.trim();
    if (text && password) {
      const encrypted = CryptoJS.AES.encrypt(text, password).toString();
      updateResultText(encrypted);
    } else {
      updateResultText('Please enter text and password to encrypt.');
    }
  };

  const decryptText = () => {
    const text = elements.inputText.value.trim();
    const password = elements.passwordInput.value.trim();
    if (text && password) {
      try {
        const decrypted = CryptoJS.AES.decrypt(text, password).toString(CryptoJS.enc.Utf8);
        updateResultText(decrypted);
      } catch (e) {
        updateResultText('Invalid password or encrypted text.');
      }
    } else {
      updateResultText('Please enter text and password to decrypt.');
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
  elements.encryptButton.addEventListener('click', encryptText);
  elements.decryptButton.addEventListener('click', decryptText);
  elements.toggleButton.addEventListener('click', toggleDarkMode);
  elements.copyButton.addEventListener('click', copyResult);
});