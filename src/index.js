const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const str = expr;
    let arr = [];
    const lettersCount = str.length / 10;
    for (let i = 0; i < lettersCount; i += 1) {
        arr.push(str.substr(10*i, 10));
    }
    let morseArr = arr.map( (item) => {
        let x = [];
        for (let i = 0; i < 10; i += 2){
            if (item[i] === '*' ) {x.push(' '); break;}
            else if (item[i] === '1' && item[i + 1] === '0') x.push('.');
            else if (item[i] === '1' && item[i + 1] === '1') x.push('-');
            else if (item[i] === '0' ) continue;
        }
        x = x.join('');

        return x;
    })
    let res = [];
    morseArr.forEach((item) =>{
        if (item === ' ') res.push(' ');
        else res.push( MORSE_TABLE[item]);
    });
    return res.join('');
}

module.exports = {
    decode
}