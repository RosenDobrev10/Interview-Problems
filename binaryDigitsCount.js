function binaryDigitsCount(n, zeroOrOne) {
    let counter = 0;
    while (n > 0) {
        let residue = n % 2;
        n = Math.floor(n / 2);
        residue === zeroOrOne ? counter++ : null;
    }
    return counter;
}


// You are given a positive integer number and one binary digit B (0 or 1).
// Your task is to write a program that finds the number of binary digits (B) in a given integer.
