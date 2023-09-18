const s = "middle-Outz";
let k = 2;

function caesarCipher(s, k) {
    let alphaStringUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alphaStringLowercase = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (const char of s) {
        let upperFlagCase = false;
        let charPos;
        
        // Check if the character is uppercase
        char === char.toUpperCase() && char !== char.toLowerCase() ? (upperFlagCase = true) : false;
        
        // Get the character's position in the appropriate alphabet string
        upperFlagCase ? (charPos = alphaStringUppercase.indexOf(char.toUpperCase())) : (charPos = alphaStringLowercase.indexOf(char.toLowerCase()));

        if (charPos !== -1) {
            charPos = charPos + k;
            charPos = charPos > 25 ? charPos - 26 : charPos; // Corrected line
            
            // Determine whether the character was originally uppercase or lowercase
            upperFlagCase ? (result += alphaStringUppercase[charPos]) : (result += alphaStringLowercase[charPos]);
        } else {
            result += char;
        }
    }

    return result;
}

console.log(caesarCipher(s, k)); // Output: "okffng-Qwvb"
