const fs = require("fs");
const cipher = fs.readFileSync(__dirname + "/p059_cipher.txt", "utf-8");
function getAsciiSum() {
    const nums = cipher.split(`,`).map((num) => parseInt(num, 10));
    const keyLength = 3;
    // range of numbers [97, 98, ..., 122,...,134,213]
    const charCodes = [...`abcdefghijklmnopqrstuvwxyz`].map((char) => char.charCodeAt());

    for (let i = 0; i < charCodes.length; i++) {
        for (let j = 0; j < charCodes.length; j++) {
            for (let k = 0; k < charCodes.length; k++) {
                const key = [charCodes[i], charCodes[j], charCodes[k]];
                const decryptedAscii = nums.map((num, index) => num ^ key[index % keyLength]);
                const decrypted = decryptedAscii.map((num) => String.fromCharCode(num)).join(``);
                const decryptedLower = decrypted.toLowerCase();

                if (decryptedLower.includes(` the `)) {
                    return decryptedAscii.reduce((a, c) => a + c);
                }
            }
        }
    }

    return `Decryption failed`;
}

module.exports = getAsciiSum;