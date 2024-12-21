class VigenereCipher {
    constructor() {
        this.plain_text = document.getElementById("plain_text");
        this.cipher_text = document.getElementById("cipher_text");
        this.encode_button = document.getElementById("encode");
        this.decode_button = document.getElementById("decode");
        this.encode_result = document.getElementById("encode_result");
        this.decode_result = document.getElementById("decode_result");
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
        this.matrix = [];
        this.key = '';
        
        this.get_26_by_26_matrix();
        this.encrypt();
        this.decrypt();
    }

    get_26_by_26_matrix() {
        for (let i = 0; i < this.alphabet.length; i++) {
            let row = [];
            let j = i;
            while (row.length != 26) {
                row.push(this.alphabet[j % 26]);
                j++;
            }
            this.matrix.push(row);
        }
    }

    set_key(key, length) {
        while (key.length < length) {
            key += key;
        }
        if (this.plain_text.value.indexOf(" ") != -1) {
            let space = this.plain_text.value.indexOf(" ");
            key = key.slice(0, space) + " " + key.slice(space);
        }
        this.key = key.slice(0, length);
    }

    encrypt() {
        this.encode_button.addEventListener('click', () => {
            let key = prompt("Enter the key:");
            this.set_key(key, this.plain_text.value.length);
            let cipher_text = "";
            for (let i = 0; i < this.plain_text.value.length; i++) {
                if (this.plain_text.value[i] === ' ') {
                    cipher_text += ' ';
                } else {
                    let row = this.alphabet.indexOf(this.key[i]);
                    let column = this.alphabet.indexOf(this.plain_text.value[i]);
                    cipher_text += this.matrix[row][column];
                }
            }
            this.encode_result.innerText = cipher_text;
        });
    }

    decrypt() {
        this.decode_button.addEventListener('click', () => {
            let key = prompt("Enter the key:");
            this.set_key(key, this.cipher_text.value.length);
            let plain_text = "";
            for (let i = 0; i < this.cipher_text.value.length; i++) {
                if (this.cipher_text.value[i] === ' ') {
                    plain_text += ' ';
                } else {
                    let row = this.alphabet.indexOf(this.key[i]);
                    let column = this.matrix[row].indexOf(this.cipher_text.value[i]);
                    plain_text += this.alphabet[column];
                }
            }
            this.decode_result.innerText = plain_text;
        });
    }
}

let obj = new VigenereCipher();