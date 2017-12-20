let a;
const isRaining = true;
/*
    Khai bao bien = null
    function return null
*/
// null, undefined, 0, '', false, NaN
const obj = { name: 'Khoa' };
console.log(obj.x);
function doSth() {
    return;
}
if (a) {
    console.log('Khong di hoc');
} else {
    console.log('Di hoc');
}
console.log('a =', a);
console.log('doSth() =', doSth());
console.log('a =', a + 0);
console.log(NaN + 1);
console.log({ name: 'a' } / 1);
console.log(null + 1);

// isRaining ? console.log('Khong di hoc') : console.log('Di hoc');

// console.log(isRaining ? 'Khong di hoc' : 'Di hoc');
