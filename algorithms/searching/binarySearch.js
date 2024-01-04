const binarySearch = (array,val) => {
    let leftIndex = 0
    let rightIndex = array.length - 1
    
    while (leftIndex <= rightIndex) {
        let centerIndex = Math.floor((leftIndex + rightIndex) / 2)
        
        if (array[centerIndex] === val) {
            return centerIndex
        }
        
        if (val < array[centerIndex]) {
            rightIndex = centerIndex
        }
        if (val > array[centerIndex]) {
            leftIndex = centerIndex + 1
        }
        
    }

}

let i = 0
const values = Array.from({ length: 9 }, () => i++)

console.time()
console.log(binarySearch(values,4));
console.timeEnd()