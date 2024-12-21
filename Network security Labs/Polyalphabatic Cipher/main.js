// Function to generate the key in a cyclic manner
/*function generateKey(text, key) {
    key = key.split("");
    if (text.length == key.length) {
        return key.join("");
    } else {
        let tempKey = key;
        for (let i = 0; key.length < text.length; i++) {
            key.push(tempKey[i % tempKey.length]);
        }
    }
    return key.join("");
}

// Function to encrypt the text
function vigenereEncrypt(text, key) {
    let cipherText = "";
    key = generateKey(text, key);
    for (let i = 0; i < text.length; i++) {
        let x = (text.charCodeAt(i) + key.charCodeAt(i)) % 26;
        x += 'A'.charCodeAt(0);
        cipherText += String.fromCharCode(x);
    }
    return cipherText;
}

// Function to decrypt the text
function vigenereDecrypt(cipherText, key) {
    let origText = "";
    key = generateKey(cipherText, key);
    for (let i = 0; i < cipherText.length; i++) {
        let x = (cipherText.charCodeAt(i) - key.charCodeAt(i) + 26) % 26;
        x += 'A'.charCodeAt(0);
        origText += String.fromCharCode(x);
    }
    return origText;
}

// Example usage
let text = "HELLOWORLD";
let key = "KEY";
let encryptedText = vigenereEncrypt(text, key);
let decryptedText = vigenereDecrypt(encryptedText, key);

console.log("Original Text: " + text);
console.log("Encrypted Text: " + encryptedText);
console.log("Decrypted Text: " + decryptedText);
*/