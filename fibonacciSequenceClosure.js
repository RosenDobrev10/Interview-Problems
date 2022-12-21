function getFibonator() {
    let [a, b] = [0, 1];
    return () => {
        [a, b] = [b, a + b];
        return a;
    }
}
