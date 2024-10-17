function subtract() {

    let firstElement = document.getElementById('firstNumber');
    let firstNum = Number(firstElement.value);
    let secontElement = document.getElementById('secondNumber');
    let secondNum = Number(secontElement.value);

    let result = firstNum - secondNum;
   let resultElement = document.getElementById('result');
   resultElement.textContent = result;

}