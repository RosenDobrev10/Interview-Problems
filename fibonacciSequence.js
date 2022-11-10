function fibonacciSequence(n) {
    const result = [0, 1]
    if (n === 0 || n === 1 || n === 2) {
        return result.slice(0, n)
    }
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result
}
