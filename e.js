function getRandom(n) {
    // return random [0...n] n la so tu nhien
    return Math.floor(Math.random() * (n + 1))
}
// console.log(getRandom(10));

function getRandom2(x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x
}

// console.log(getRandom2(2, 3));
// console.log(Math.random());
// console.log(Math.round(10.5))
// console.log(Math.ceil(0.1))
// console.log(Math.floor(0.9))

/*

n = 4;

****
 ***
  **
   *

*/
// function veHinh(n) {
//     for(let s = ''; s.length < n;) console.log(s += '*');
// }
function veHinh(n) {
    for (let i = 1; i <= n; i++) {
        let s = '';
        for (let j = 1; j <= n; j++) {
            // i <= j ? s += '*' : s += ' ';
            s += i <= j ? '*' : ' ';
        }
        console.log(s);
    }
}

veHinh(4);
