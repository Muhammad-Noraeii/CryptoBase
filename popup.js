// Ensure elements are loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  const encodeButton = document.getElementById('encodeBtn');
  const decodeButton = document.getElementById('decodeBtn');
  const inputText = document.getElementById('inputText');
  const resultText = document.getElementById('resultText');
  const body = document.querySelector('body'); // Add reference to body
  const toggleButton = document.getElementById('toggleDarkMode');
  const icon = toggleButton.querySelector('i'); // Get the icon element

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

  // Function to toggle dark mode
  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    // Change icon based on dark mode status
    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon'); // Switch to moon icon
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun'); // Switch to sun icon
    }
  }

  // Add event listeners with named functions
  encodeButton.addEventListener('click', encodeBase64);
  decodeButton.addEventListener('click', decodeBase64);
  toggleButton.addEventListener('click', toggleDarkMode); // Attach event listener to toggle button
});
