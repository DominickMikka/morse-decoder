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
    let arr = [];
    let symbol = '';
  
    let str = expr;
  
    for (let i = 0; i < str.length; i = i + 10) {
      symbol = str.substring(i, i + 10).replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '').replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ');
      arr.push(symbol);
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (MORSE_TABLE[arr[i]]) {
        arr[i] = MORSE_TABLE[arr[i]];
      }
    }
  
    arr = arr.join('');
    
    return arr;
}

module.exports = {
    decode
}