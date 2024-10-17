function solve(arr) {
    return arr.sort((a, b) => a.localeCompare(b)).map((name, index) => {
        return `${index + 1}.${name}`
    }).join('\n')
}