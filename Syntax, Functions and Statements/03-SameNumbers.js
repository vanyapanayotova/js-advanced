function sameNumbers(number) {
    let num = number.toString();
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);

        if (typeof num[i + 1] === 'undefined') {
            break;
        } else if (Number(num[i]) !== Number(num[i + 1])){
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);

}