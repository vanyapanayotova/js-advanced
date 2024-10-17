function solve(arr) {
    return arr.reduce((acc, curr) => {
        return acc[acc.length - 1] <= curr || acc.length === 0
            ? [...acc, curr]
            : acc
    }, [])
}