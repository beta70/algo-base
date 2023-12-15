const fibonacci = n => {
    const nums = []
    let i = 1
    let n1 = 0
    let n2 = 1
    let next = 0

    nums.push(...[n1,n2])

    while (i <= n) {
        next = n1 + n2
        nums.push(next)
        
        n1 = n2
        n2 = next
        i++
    } 

    return nums
}

const fibonacciUntil = val => {
    const nums = []
    let i = 1
    let n1 = 0
    let n2 = 1
    let next = 0

    nums.push(...[n1,n2])

    while (next <= val - n1) {
        next = n1 + n2
        nums.push(next)
        
        n1 = n2
        n2 = next
    } 

    return nums
}