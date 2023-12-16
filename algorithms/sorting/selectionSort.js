const randomArray = require('../../helper/randomArray.js')

const selectionSort = array => {
    let temp

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] <= array[i]) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }

    return array
}

console.time()
console.log(selectionSort(randomArray(100_000)));
console.timeEnd()