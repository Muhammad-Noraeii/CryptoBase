


## **CryptoBase - Base64 Encoder & Decoder**

**CryptoBase** is a simple Chrome extension that allows users to encode and decode text using the Base64 encoding scheme. The tool is designed with a user-friendly interface for quick and easy encoding and decoding tasks.

---

### **Table of Contents**
1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [How to Use](#how-to-use)
5. [File Structure](#file-structure)
6. [Code Explanation](#code-explanation)
7. [Contributing](#contributing)

---

### **Overview**

CryptoBase is a lightweight Base64 encoder and decoder that allows users to:
- Encode text into Base64.
- Decode Base64 encoded text back to its original form.

The extension works by providing a clean, intuitive interface with a text input area and two buttons: "Encode" and "Decode". The results are shown in an output text area, making it quick and easy for users to encode or decode any string of text.

---

### **Features**
- **Base64 Encoding**: Convert regular text into Base64 encoding.
- **Base64 Decoding**: Convert Base64-encoded strings back to readable text.
- **Responsive Design**: Fully responsive layout for smooth usage across devices.
- **User-Friendly Interface**: Simple and clean design for easy interaction.

---

### **Installation**

To use **CryptoBase** as a Chrome extension:

1. **Clone or download the repository**: 
   - You can clone the repository using Git or simply download it as a ZIP file.

   ```bash
   git clone https://github.com/Muhammad-Noraeii/CryptoBase.git
   ```

2. **Load the extension in Chrome**:
   - Open Google Chrome.
   - Go to `chrome://extensions/`.
   - Enable **Developer mode** in the top-right corner.
   - Click on **Load unpacked**.
   - Select the folder where you saved the project.

3. **Start using CryptoBase**:
   - After installing the extension, you will see the CryptoBase icon in the browser's extension bar.
   - Click on the icon to open the extension popup.

---

### **How to Use**

1. **Enter the text** you want to encode or decode in the "Enter text here" textarea.
2. **Click on the "Encode" button** to encode the entered text to Base64. The result will appear in the output field.
3. **Click on the "Decode" button** to decode a Base64-encoded string back into its original form.
4. **Results** will be displayed in the "Result will appear here" textarea.

---

### **File Structure**

```plaintext
CryptoBase/
│
├── popup.html         # HTML file that contains structure and styling
├── popup.js           # JavaScript file with the logic for encoding/decoding
├── popup.css          # Internal CSS for styling the extension popup
├── manifest.json      # Manifest file required for Chrome extensions
└── README.md          # Documentation file (this one!)
```

---

### **Code Explanation**

#### **popup.html**
The `popup.html` file contains the structure of the extension. It includes:
- **Textareas** for input and output.
- **Buttons** for triggering encoding and decoding.
- **Embedded CSS** for styling the page.

The `popup.html` file is the visual component that the user interacts with when using the extension.

#### **popup.js**
The `popup.js` file contains the JavaScript code responsible for the functionality of encoding and decoding text:
- The `encodeBase64()` function encodes input text to Base64 using `btoa()`.
- The `decodeBase64()` function decodes a Base64 string to its original form using `atob()`.

Event listeners are attached to the buttons so that when a user clicks "Encode" or "Decode", the respective function is called.

#### **popup.css**
The `popup.css` file defines the styles for the extension's popup. It ensures the interface is clean, responsive, and visually appealing:
- Uses flexbox for layout management.
- Contains styling for buttons, textareas, and other UI elements.

#### **manifest.json**
The `manifest.json` file is a required configuration for any Chrome extension. It contains metadata about the extension, including:
- Name, version, description, etc.
- Permissions required (such as the ability to run in the background).
- The extension's popup HTML file and icons.

---

### **Contributing**

Contributions to CryptoBase are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new pull request.

If you have any questions or suggestions, feel free to open an issue or submit a pull request.

---

### **License**
CryptoBase is licensed under the [MIT License](LICENSE).

---

