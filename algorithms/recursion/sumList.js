const sumList = array => {
    if (!array.isArray) return new Error('Please insert a valid array!')
    if (!array.length) return [] 
    if (array.length === 1) return array[0]
    
    return array[array.length - 1] + sumList(array.slice(0, array.length - 1))
}