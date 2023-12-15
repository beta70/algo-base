const factorial = val => {
    if (val <= 1) return val

    return val * factorial(val - 1)
}