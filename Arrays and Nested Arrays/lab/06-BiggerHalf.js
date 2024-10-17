function biggerHalf(arr) {
    let len = arr.length / 2 - 0.5;
    if (arr.length % 2 === 0) {
        len = arr.length / 2;
    }
    arr = arr.sort((a, b) => a - b).splice(len);

    return arr;
}