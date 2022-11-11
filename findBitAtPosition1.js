function findBitAtPosition1(n) {
    let result = "";
    while (n > 0) {
        result += n % 2;
        n = Math.floor(n / 2);
    }
    result = result.split("").reverse().join("").padStart(8, "0");
    return result[result.length - 2];
}

// Write a program that prints the bit at position 1 of the given integer. We use the standard counting: from right to left, starting from 0.
