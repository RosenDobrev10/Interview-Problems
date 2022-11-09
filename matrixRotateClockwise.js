function task2(matrix, rotations) {

    let result = "";

    if (rotations % 4 === 0) {
        matrix.forEach(line => result += line.join("_") + "\n");
        return result;
    }

    let n = matrix.length;
    for (let r = 0; r < rotations; r++) {
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        for (let i = 0; i < n; i++) {
            let low = 0;
            let high = n - 1;
            while (low < high) {
                let temp = matrix[i][low];
                matrix[i][low] = matrix[i][high];
                matrix[i][high] = temp;
                low++;
                high--;
            }
        }
    }

    matrix.forEach(line => result += line.join("_") + "\n");
    return result;
}
