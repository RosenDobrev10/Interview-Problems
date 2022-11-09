function rot13(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
            if (str[i].charCodeAt() - 13 < 65) {
                result += String.fromCharCode(str[i].charCodeAt() + 13)
            } else {
                result += String.fromCharCode(str[i].charCodeAt() - 13)
            }
        } else {
            result += str[i]
        }
    }
    return result;
}
