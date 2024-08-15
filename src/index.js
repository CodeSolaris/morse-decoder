const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

function decode(expr) {
    // write your solution here
    const dot = "10";
    const dash = "11";
    const space = "**********";

    const CODED_MORSE_TABLE = {}
    for (const [key, value] of Object.entries(MORSE_TABLE)) {
        const codedKey = key.replace(/\./g, dot).replace(/\-/g, dash).padStart(10, '0');
        CODED_MORSE_TABLE[codedKey] = value;
    }
    CODED_MORSE_TABLE[space] = ' ';

    let splittedByCharExpr = () => {
        const result = [];
        for (let i = 0; i < expr.length; i += 10) {
            result.push(expr.substring(i, i + 10));
        }
        return result;
    };

    const splittedWordArr = splittedByCharExpr();

    return splittedWordArr.map(char => CODED_MORSE_TABLE[char]).join('');

}

module.exports = {
    decode,
};

