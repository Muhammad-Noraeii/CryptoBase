// Ensure elements are loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  const encodeButton = document.getElementById('encodeBtn');
  const decodeButton = document.getElementById('decodeBtn');
  const inputText = document.getElementById('inputText');
  const resultText = document.getElementById('resultText');
  const body = document.querySelector('body');
  const toggleButton = document.getElementById('toggleDarkMode');
  const icon = toggleButton.querySelector('i'); // Get the icon element
  const copyButton = document.getElementById('copyBtn'); // Copy button

  function encodeBase64() {
    const text = inputText.value;
    if (text) {
      resultText.value = btoa(text);
    } else {
      resultText.value = 'Please enter text to encode.';
    }
  }

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

  // Function to toggle dark mode
  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    // Change icon based on dark mode status
    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon'); 
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun'); 
    }
  }


  function copyResult() {
    resultText.select(); 
    document.execCommand('copy'); 
    alert('Result copied to clipboard!');
  }

  // Add event listeners with named functions
  encodeButton.addEventListener('click', encodeBase64);
  decodeButton.addEventListener('click', decodeBase64);
  toggleButton.addEventListener('click', toggleDarkMode); // Attach event listener to toggle button
  copyButton.addEventListener('click', copyResult); // Attach event listener to copy button
});
