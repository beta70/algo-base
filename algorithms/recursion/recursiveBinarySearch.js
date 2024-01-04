const recursiveBinarySearch = (array,val) => {
    let leftIndex = 0
    let rightIndex = array.length - 1
    let centerIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (array[centerIndex] === val) {
        return center
    }
    
    if (val < array[centerIndex]) {
        return recursiveBinarySearch(array.slice(leftIndex, centerIndex), val)
    }
    if (val > array[centerIndex]) {
        return recursiveBinarySearch(array.slice(centerIndex + 1, rightIndex + 1), val)
    }
}


let i = 0
const values = Array.from({ length: 9 }, () => i++)

console.time()
console.log(recursiveBinarySearch(values,8));
console.timeEnd()