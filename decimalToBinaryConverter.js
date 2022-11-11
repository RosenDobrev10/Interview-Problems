function decimalToBinaryConverter(n) {
    let result = "";
    while (n > 0) {
        result += n % 2;
        n = Math.floor(n / 2);
    }
    return result.split("").reverse().join("");
}
