class VigenereCipheringMachine {
    constructor(type) {
        this.type = type;
    }
    
    encrypt(message, key) {
        if(message == undefined || key == undefined || message ===null || key === null){
            throw 'Message and key are mandatory!';
        }
        message = message.toUpperCase();
        key = key.repeat(Math.ceil(message.length/key.length));
        key = key.toUpperCase();
        let alphabet=[];
        for(let i=65; i < 91; i++){
            alphabet.push(String.fromCharCode(i));
        }
     
        let result =[];
        let key_index;
        let message_index;
        let  alphabet_index;
        let k=0;
        for(let j=0; j < message.length; j++) {
            if(alphabet.includes(message[j])) {
                 key_index = alphabet.indexOf(key[k]);
                 k++;
                 message_index = alphabet.indexOf(message[j]);
                 alphabet_index = (message_index+key_index < 26 ? message_index+key_index : ((message_index+key_index)-26));
                 result.push(alphabet[alphabet_index]);
            }     
             else {
                result.push(message[j]);
            }
        }
        if(this.type === false){
            return result.reverse().join('');
        }
        return result.join('');
    }
    decrypt(message, key) {
        if(message === undefined || key === undefined || message ===null || key === null){
            throw 'Message and key are mandatory!';
        }
        message = message.toUpperCase();
        key = key.repeat(Math.ceil(message.length/key.length));
        key = key.toUpperCase();
        let alphabet=[];
        for(let i=65; i < 91; i++){
            alphabet.push(String.fromCharCode(i));
        }
        let result =[];
        let key_index;
        let message_index;
        let  alphabet_index;
        let k=0;
        for(let j=0; j < message.length; j++) {
            if(alphabet.includes(message[j])) {
                 key_index = alphabet.indexOf(key[k]);
                 k++;
                 message_index = alphabet.indexOf(message[j]);
                 alphabet_index = (message_index-key_index >=0 ? message_index-key_index : (message_index-key_index+26));
                 result.push(alphabet[alphabet_index]);
            }     
             else {
                result.push(message[j]);
            }
        }
        if(this.type === false){
            return result.reverse().join('');
        }
        return result.join('');
    }
}

module.exports = VigenereCipheringMachine;
