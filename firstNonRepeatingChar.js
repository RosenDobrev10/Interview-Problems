function firstNonRepeatingChar(str) {
    for (const char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
}
