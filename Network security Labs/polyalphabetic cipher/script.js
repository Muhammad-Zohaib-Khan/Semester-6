const header = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const matrix = [
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'p', 'o', 'i', 'u', 'y', 't', 'r', 'e', 'w', 'q', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ['q', 'a', 'z', 'w', 's', 'x', 'e', 'd', 'c', 'r', 'f', 'v', 't', 'g', 'b', 'y', 'h', 'n', 'u', 'p', 'j', 'm', 'i', 'k', 'o', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'k', 'i', 'o', 'p', 'l', 'u', 'j', 'h', 'y', 't', 'g', 'f', 'r', 'e', 'd', 's', 'w', 'q', 'a']
];

const getMatrixIndex = (i) => (i < 3) ? (i + 3) % 3 : i % 3;

const cipherText = (plainText) => {
    let cipher_text = "";
    for (let i = 0; i < plainText.length; i++) {
        let index = header.indexOf(plainText[i]);
        if (index !== -1) {
            let get_matrix = getMatrixIndex(i);
            cipher_text += matrix[get_matrix][index];
        } else {
            cipher_text += plainText[i];
        }
    }
    return cipher_text;
};

const decipherText = (cipherText) => {
    let plain_text = "";
    for (let i = 0; i < cipherText.length; i++) {
        let get_matrix = getMatrixIndex(i);
        let index = matrix[get_matrix].indexOf(cipherText[i]);
        if (index !== -1) {
            plain_text += header[index];
        } else {
            plain_text += cipherText[i];
        }
    }
    return plain_text;
};

document.getElementById('encode').addEventListener('click', () => {
    const plainText = document.getElementById('plain_text').value.toLowerCase();
    const result = cipherText(plainText);
    document.getElementById('encode_result').textContent = result;
});

document.getElementById('decode').addEventListener('click', () => {
    const cipherText = document.getElementById('cipher_text').value.toLowerCase();
    const result = decipherText(cipherText);
    document.getElementById('decode_result').textContent = result;
});
