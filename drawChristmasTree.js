function drawChristmasTree(size) {
    let char = "*";
    let n = 0;
    let result = "";
    for (let i = 1; i <= size; i++) {
        result += `${" ".repeat(size - n)}${char.repeat(i * 2)}${" ".repeat(size - n)}\n`;
        n++;
    }
    return result.trimEnd();
}
