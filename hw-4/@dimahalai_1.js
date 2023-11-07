
function VigenèreCipher(key, abc) {
    this.abc = abc.split('');
    this.key = key.split('');

    this.encode = function (str) {
        let message = str.split('');
        let result = [];
        for (let i = 0; i < message.length; i++){
            if (this.abc.includes(message[i])){
                let index = (this.abc.indexOf(message[i]) + 1 + this.abc.indexOf(this.key[i % this.key.length])) % this.abc.length - 1;
                if(index >= 0){
                    result[i] = abc[index]
                }
                else{
                    index = this.abc.length + index;
                    result[i] = abc[index]
                }}
            else {result[i] = message[i]}
        }
        return result.join('')
    };

    this.decode = function (str) {
        let code = str.split('')
        let result = [];
        for (let i = 0; i < code.length; i++){
            if (this.abc.includes(code[i])) {
                let index = (this.abc.indexOf(code[i]) + 1 - this.abc.indexOf(this.key[i % this.key.length]) - 1);
                if (index >= 0){
                    result[i] = this.abc[index];}
                else {
                    index = this.abc.length + index;
                    result[i] = this.abc[index];
                }
            }
            else result[i] = code[i];
        }
        return result.join('');
    };
}

abc = "abcdefghijklmnopqrstuvwxyz";
key = "pizza"
c = new VigenèreCipher(key, abc);

console.log(c.encode("javascript"))
