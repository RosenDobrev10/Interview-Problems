- Алгоритъм за намиране на 3-тото най-голямо число в масив, но без да бъдат размествани оригиналните индекси на числата в масива.
 
- Бонус точки, ако бъде решен само с един цикъл и без никакви методи (за да е по-бърз).
 
- Накрая трябва да се принтира 3-тото най-голямо число и индекс позицията му в дадения масив.
 
Подсказка: внимавайте за повтарящи числа.
 
 
>> Примерен вход: [91, 2, 33, 51, 54, 39, 34, 61, 34, 91];

function thirdBiggestNumber(arr) {
    let copy = arr.slice()
    let result = copy.sort((a, b) => b - a)[2]
    console.log(result)
    console.log(arr.indexOf(result))
}

function thirdBiggestNumber(arr) {
    let first = Number.MIN_SAFE_INTEGER
    let second = Number.MIN_SAFE_INTEGER
    let third = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (num >= first && num >= second && num >= third) {
            third = second
            second = first
            first = num
        } else if (num <= first && num >= second && num >= third) {
            third = second
            second = num
        } else if (num <= first && num <= second && num >= third) {
            third = num
        }   
    }
    console.log(third)
    for (let i = 0; i < arr.length; i++){
        let num = arr[i]
        if (num === third){
            console.log(i)
        }
    }
}
