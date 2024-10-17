function sortingNumbers(input) {
    let result = [];
    let array = input.sort((a, b) => a - b);
    while (array.length !== 0) {
        result.push(array[0]) && array.shift();
        result.push(array[array.length - 1]) && array.pop();
    }
   return result;
}