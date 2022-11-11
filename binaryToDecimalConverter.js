function binaryToDecimalConverter(n) {
    let nAsString = String(n)
    length = nAsString.length
    let result = 0
    for (let i = 0; i < nAsString.length; i++) {
        result += nAsString[i] * (Math.pow(2, length - 1))
        length--
    }
    return result
}
