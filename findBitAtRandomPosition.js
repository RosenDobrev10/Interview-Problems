function findBitAtRandomPosition1(n, position) {
    let result = "";
    while (n > 0) {
        result += n % 2;
        n = Math.floor(n / 2);
    }
    result = result.split("").reverse().join("").padStart(position + 1, "0");
    return result[result.length - position - 1];
}

// Write a program that prints the bit at position p of the given integer. We use the standard counting: from right to left, starting from 0.
