// Ensure elements are loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  const encodeButton = document.getElementById('encodeBtn');
  const decodeButton = document.getElementById('decodeBtn');
  const inputText = document.getElementById('inputText');
  const resultText = document.getElementById('resultText');
  
  // Function to encode text in Base64
  function encodeBase64() {
    const text = inputText.value;
    if (text) {
      resultText.value = btoa(text);
    } else {
      resultText.value = 'Please enter text to encode.';
    }
  }

  // Function to decode Base64 text
  function decodeBase64() {
    const text = inputText.value;
    if (text) {
      try {
        resultText.value = atob(text);
      } catch (e) {
        resultText.value = 'Invalid Base64 string';
      }
    } else {
      resultText.value = 'Please enter text to decode.';
    }
  }

  // event listeners with named functions
  encodeButton.addEventListener('click', encodeBase64);
  decodeButton.addEventListener('click', decodeBase64);
});
