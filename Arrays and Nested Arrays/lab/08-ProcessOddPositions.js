function solve(numbers) {
    const oddPositionNumbers = numbers.filter((number, index) => index % 2 !== 0);
    const doubledNumbers = oddPositionNumbers.map(number => number * 2);
    const reversedNumbers = doubledNumbers.reverse();

    return reversedNumbers;
}