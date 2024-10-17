function addAndRemoveElements(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 'add') {
            newArr.push(i + 1);
        } else {
            newArr.pop(i);
        }
    }

    if (newArr.length === 0) {
        console.log("Empty");
    } else {
        console.log(newArr.join('\n'));
    }
}