/*let plain_text="give money"
let matrix = [];

let alphabet = "abcdefghijklmnopqrstuvwxyz";

let get_matrix = () => {
    for (let i = 0; i < alphabet.length; i++){
        let row = [];
        let j = i;
        while (row.length != 26) {
            row.push(alphabet[j % 26]);
            j++;
        }
        matrix.push(row);
    }
    return matrix;
}

let key="ubit"
while (key.length < plain_text.length){
    key+=key
}
if (plain_text.indexOf(" ")!=-1){
    let space= plain_text.indexOf(" ");
    key=key.slice(0,space)+plain_text[space]+key.slice(space)    
}
let new_key=key.slice(0,plain_text.length)

let encrypt=(plain_text,key)=>{
    let cipher_text=""
    for (let i=0; i<plain_text.length; i++){
        if (plain_text[i]===' '){
            cipher_text+=' '
        }else{
            let row=alphabet.indexOf(key[i])
            let column=alphabet.indexOf(plain_text[i])
            cipher_text+=matrix[row][column]
        }
    }
    return cipher_text;
}
let decript=(cipher_text,key)=>{
    let plain_text="";
    for (let i=0;cipher_text.length;i++){
        if (cipher_text[i]===' '){
            plain_text+=''
        }else{
            let row= alphabet.indexOf(key[i])
            let column= matrix[row].indexOf(cipher_text[i])
            plain_text += alphabet[column]
        }
    }
    return plain_text;

}
get_matrix()
let a=encrypt(plain_text,new_key);
console.log(a)
let b=decript(a,new_key)
console.log(b)*/



class Vinegar_Cipher{
    constructor(){
        this.plain_text=document.getElementById("plain_text");
        this.ciphar_text=document.getElementById("cipher_text");
        this.button=document.getElementsByTagName("button")
        this.result=document.getElementsByClassName("result");
        this.alphabet ='abcdefghijklmnopqrstuvwxyz';
        this.matrix=[]
        this.key;
    }
    get_26_by_26_matrix(){
        
        for (let i=0;i < this.alphabet.length;i++){
            let row=[]
            let j=i
            while(row.length!=26){
                row.push(this.alphabet[j%26]);
                j++;
            }
            this.matrix.push(row)
        }
    }
    set_key(key){
        while (key.length < toString(this.plain_text.value.length)){
            key+=key;
        }
        if (toString(this.plain_text.value).indexOf(" ")!=-1){
            let space=toString(this.plain_text.value).indexOf(" ")
            key=key.slice(0,space)+" "+key.slice(space)
        }
        this.key=key.slice(0,toString(this.plain_text.value.length))
    }

    encrypt(){
        this.button[0].addEventListener('click',()=>{
            let cipher_text=" "
            for (let i=0;i<this.plain_text.value;i++){
                if (this.plain_text.value[i]===' '){
                    cipher_text+=' '
                }else{
                    let row = this.alphabet.indexOf(this.key[i]);
                    let column = this.alphabet.indexOf(this.plain_text.value[i]);
                    this.cipher_text+=this.matrix[row][column]
                }
            }
            return this.result[0].innerText=this.cipher_text;
        })
    }



    decrypt(){
        this.button[1].addEventListener('click',()=>{
            let plain_text=" "
            for (let i=0;i<this.ciphar_text;i++){
                if (this.ciphar_text[i]===' '){
                    plain_text+=' '
                }else{
                    let row = this.alphabet.indexOf(this.key[i]);
                    let column = this.matrix[row].indexOf(this.ciphar_text[i]);
                    plain_text += this.alphabet[column];
                }
            }
            return this.result[0].innerText=plain_text;
        })
    }
}
let obj= new Vinegar_Cipher()
obj.encrypt()
obj.get_26_by_26_matrix()
obj.set_key("ubit")



/*let plain_text = "give money";
let matrix = [];
let alphabet = "abcdefghijklmnopqrstuvwxyz";

let get_matrix = () => {
    for (let i = 0; i < alphabet.length; i++) {
        let row = [];
        let j = i;
        while (row.length != 26) {
            row.push(alphabet[j % 26]);
            j++;
        }
        matrix.push(row);
    }
    return matrix;
}

let key = "ubit";
while (key.length < plain_text.length) {
    key += key;
}
if (plain_text.indexOf(" ") != -1) {
    let space = plain_text.indexOf(" ");
    key = key.slice(0, space) + plain_text[space] + key.slice(space);
}
let new_key = key.slice(0, plain_text.length);

let encrypt = (plain_text, key) => {
    let cipher_text = "";
    for (let i = 0; i < plain_text.length; i++) {
        if (plain_text[i] === ' ') {
            cipher_text += ' ';
        } else {
            let row = alphabet.indexOf(key[i]);
            let column = alphabet.indexOf(plain_text[i]);
            cipher_text += matrix[row][column];
        }
    }
    return cipher_text;
}

let decrypt = (cipher_text, key) => {
    let plain_text = "";
    for (let i = 0; i < cipher_text.length; i++) {
        if (cipher_text[i] === ' ') {
            plain_text += ' ';
        } else {
            let row = alphabet.indexOf(key[i]);
            let column = matrix[row].indexOf(cipher_text[i]);
            plain_text += alphabet[column];
        }
    }
    return plain_text;
}

get_matrix();
let encrypted_text = encrypt(plain_text, new_key);
console.log(encrypted_text);
let decrypted_text = decrypt(encrypted_text, new_key);
console.log(decrypted_text);*/