function townPopulation(arr) {
    let obj = {};

    for (const line of arr) {
        let [townName, townPopulation] = line.split(' <-> ');
        townPopulation = Number(townPopulation);

        if (!obj[townName]) {
            obj[townName] = townPopulation;
        } else {
            obj[townName] += townPopulation
        }
    }
    for (const line in obj) {
    console.log(`${line} : ${obj[line]}`);
    }
}