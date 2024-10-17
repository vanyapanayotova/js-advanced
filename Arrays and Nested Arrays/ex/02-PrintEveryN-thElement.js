function printEveryNthElementArray(arr, step) {
    let newArr = [];

    for (let i = 0; i < arr.length; i = i + step) {
        newArr.push(arr[i]);
        
    }
    return newArr;
}