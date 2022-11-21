function isPalindrome(string) {
    let reversed = string.split("").reverse().join("");
    return string === reversed
}

function isPalindrome(string) {
    const length = string.length
    for (let i = 0; i < length / 2; i++) {
        if (string[i] !== string[length - 1 - i]) {
            return false
        }
    }
    return true
}
