const randomArray = require("../../helper/randomArray")

const merge = (left,right) => {
    const mergedArray = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            mergedArray.push(left[i])
            i++
        }
        else {
            mergedArray.push(right[j])
            j++
        }
    }

    while (i < left.length) {
        mergedArray.push(left[i])
        i++
    }

    while (j < right.length) {
        mergedArray.push(right[j])
        j++
    }

    return mergedArray
}

const mergeSort = array => {

    if (array.length < 2) return array

    const center = Math.floor(array.length / 2)
    const leftArr = array.slice(0,center)
    const rightArr = array.slice(center,array.length)
    
    const left = mergeSort(leftArr)
    const right = mergeSort(rightArr)

    return merge(left,right)
}

console.time()
console.log(mergeSort(randomArray(100_000)));
console.timeEnd()