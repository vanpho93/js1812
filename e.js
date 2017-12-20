function getRandom(n) {
    // return random [0...n] n la so tu nhien
    return Math.floor(Math.random() * (n + 1))
}
// console.log(getRandom(10));

function getRandom2(x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x
}

console.log(getRandom2(2, 3));
// console.log(Math.random());
// console.log(Math.round(10.5))
// console.log(Math.ceil(0.1))
// console.log(Math.floor(0.9))