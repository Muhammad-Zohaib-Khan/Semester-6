/*class Polyalphabatic_Cipher{
    constructor(){
        this.plain_text =document.getElementById("plain_text")
        this.cipher_text=document.getElementById("cipher_text")
        this.encode_button=document.getElementById("encode")
        this.decode_button=document.getElementById("decode")
        this.encode_result=document.getElementById("encode_result")
        this.decode_result=document.getElementById("decode_result")
        this.encrypt()
        this.decrypt()
    }

    #generate_key=(message,key)=>{
        key=key.split("");
        if (message.length==key.length){
            return key.join("")
        }else{
            let temporary_key= key
            for (let i=0;key.length<message.length;i++){
                key.push(temporary_key[i%temporary_key.length])
            }
            return key.join("")
        }
    }
    
    encrypt=()=>{
        let cipher_text="";
        let key=prompt("Enter the Key")
        this.encode_button.addEventListener('click',()=>{
            let plain_text=this.plain_text.value;
            key= this.#generate_key(plain_text,key)
            for (let i=0;i<plain_text.length;i++){
                let x = (plain_text.charCodeAt(i) + key.charCodeAt(i))%26
                x+='A'.charCodeAt(0)
                cipher_text+=String.fromCharCode(x)
             }
             this.encode_result.innerText=cipher_text
        })
    }


    decrypt=()=>{
        let plain_text="";
        let key=prompt("Enter the Key")
        this.encode_button.addEventListener('click',()=>{
            let cipher_text=this.cipher_text;
            key= this.#generate_key(cipher_text,key)
            for (let i=0;i<cipher_text.length;i++){
                let x = (cipher_text.charCodeAt(i) + key.charCodeAt(i))%26
                x+='A'.charCodeAt(0)
                plain_text+=String.fromCharCode(x)
             }
             this.decode_result.innerText=plain_text

        })
    }
}
let obj= new Polyalphabatic_Cipher()
*/

class Polyalphabatic_Cipher {
    constructor() {
        this.plain_text = document.getElementById("plain_text");
        this.cipher_text = document.getElementById("cipher_text");
        this.encode_button = document.getElementById("encode");
        this.decode_button = document.getElementById("decode");
        this.encode_result = document.getElementById("encode_result");
        this.decode_result = document.getElementById("decode_result");
        this.encrypt();
        this.decrypt();
    }

    #generate_key = (message, key) => {
        key = key.split("");
        if (message.length == key.length) {
            return key.join("");
        } else {
            let temporary_key = key;
            for (let i = 0; key.length < message.length; i++) {
                key.push(temporary_key[i % temporary_key.length]);
            }
            return key.join("");
        }
    }

    encrypt = () => {
        this.encode_button.addEventListener('click', () => {
            let plain_text = this.plain_text.value;
            let key = prompt("Enter the Key");
            key = this.#generate_key(plain_text, key);
            let cipher_text = "";
            for (let i = 0; i < plain_text.length; i++) {
                let x = (plain_text.charCodeAt(i) + key.charCodeAt(i)) % 26;
                x += 'A'.charCodeAt(0);
                cipher_text += String.fromCharCode(x);
            }
            this.encode_result.innerText = cipher_text;
        });
    }

    decrypt = () => {
        this.decode_button.addEventListener('click', () => {
            let cipher_text = this.cipher_text.value;
            let key = prompt("Enter the Key");
            key = this.#generate_key(cipher_text, key);
            let plain_text = "";
            for (let i = 0; i < cipher_text.length; i++) {
                let x = (cipher_text.charCodeAt(i) - key.charCodeAt(i) + 26) % 26;
                x += 'A'.charCodeAt(0);
                plain_text += String.fromCharCode(x);
            }
            this.decode_result.innerText = plain_text;
        });
    }
}

let obj = new Polyalphabatic_Cipher();
