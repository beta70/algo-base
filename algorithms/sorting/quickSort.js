const randomArray = require("../../helper/randomArray")

const quickSort = array => {
    if (array.length < 2) return array

    let pivot = array[Math.floor(array.length / 2)]
    let leftArr = []
    let rightArr = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) leftArr.push(array[i])
        if (array[i] > pivot) rightArr.push(array[i])
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

console.time()
console.log(quickSort(randomArray(100_000)));
console.timeEnd()


