function example() {
    const box = [1, 2, 3, 6];
    let out = ""

    // Map function out array
    const mapFunction = box.map((item) => item * 5);
    mapFunction.forEach(item => {
        out += `<h1>Map: ${item}</h1>`;
    });

    // Filter function out array
    const filterFunction = box.filter((item) => item > 2);
    filterFunction.forEach(item => {
        out += `<h1>Filter: ${item}</h1>`;
    });

    // Find function out single
    const findFunction = box.find((item) => item == 5);
    out += `<h1>Find: ${findFunction}</h1>`;

    // FindIndex function out single
    const findIndexFunction = box.findIndex((item) => item == 5);
    out += `<h1>FindIndex: ${findIndexFunction}</h1>`;

    // Reduce function out single
    const reduceFunction = box.reduce((total, item) => total + item);
    out += `<h1>Reduce: ${reduceFunction}</h1>`;

    // Includes function out single
    const includesFunction = box.includes(3);
    out += `<h1>Includes: ${includesFunction}</h1>`;

    // Sort function out array
    const sortFunction = box.sort((a, b) => a > b);
    sortFunction.forEach(item => {
        out += `<h1>Sort: ${item}</h1>`;
    });

    document.getElementById("root").innerHTML = out;
}

window.addEventListener("load", example);