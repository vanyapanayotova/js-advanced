function solve(input) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < input.length; i++) {
        mainDiagonalSum += input[i][i];
        secondaryDiagonalSum += input[input.length - 1 - i][i];
    }

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}