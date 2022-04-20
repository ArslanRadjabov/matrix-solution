mass = [
    [1, 1, 1, 1],
    [5, 2, 2, 100],
    [9, 4, 2, 1]
];

for (let j = 1; j < mass[0].length; j++) {
    mass[0][j] += mass[0][j - 1]
}

for (let j = 1; j < mass.length; j++) {
    mass[j][0] += mass[j - 1][0]
}

for (let i = 1; i < mass.length; i++) {
    for (let j = 1; j < mass[i].length; j++) {
        const top = mass[i - 1][j];
        const left = mass[i][j - 1];
        mass[i][j] += top > left ? left : top;
    }
}
console.log(mass[mass.length - 1][mass[0].length - 1]);