function productOfOtherNumbers(arr) {
    const newArr = [];
    arr.forEach(num => newArr.push(arr.filter(number => number !== num).reduce((a, b) => a * b)));
    return newArr.join("-");
}
