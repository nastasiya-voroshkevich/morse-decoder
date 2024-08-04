const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // let arr = expr.toLowerCase().split('')
    // let key = []
    // for (let i = 0; i < arr.length; i++) {
    //     key.push(Object.keys(MORSE_TABLE).find(k => MORSE_TABLE[k] === arr[i]).replace(/\./g, '10').replace(/\-/g, '11').split(''))

    // }

    // for (let i = 0; i < key.length; i++) {
    //     if (key[i].length < 10) {
    //         key[i].unshift('0'.repeat(10 - key[i].length))

    //     }

    // }

    //   return  key.join('').replace(/\,/g, '')
    let arr = []
    let str = expr.split('')
    let number = expr.replace(/10/g, ".").replace(/11/g, "-").replace(/00/g, "")
    for (let i = 0; i < str.length; i += 10) {
        arr.push(str.slice(i, i + 10))
    }
    let newArr = arr.map(i => i.join('').replace(/10/g, ".").replace(/11/g, "-").replace(/00/g, ""))

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] !== '**********') {
            newArr[i] = MORSE_TABLE[newArr[i]]
        }
    }


    return newArr.join('').split('**********').join(' ')
}


module.exports = {
    decode
}