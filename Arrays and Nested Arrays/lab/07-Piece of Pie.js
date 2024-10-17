function solve(pieFlavors = [], firstPie, lastPie) {
    let firstPieIndex = pieFlavors.indexOf(firstPie);
    let lastPieIndex = pieFlavors.indexOf(lastPie);

    const resultPies = pieFlavors.slice(firstPieIndex, lastPieIndex + 1);

    return resultPies;
}