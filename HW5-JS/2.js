let arr = [10, [25, 13], [14, [55]], 2]
// console.log(arr.flat(Infinity));

function flatarray(arr) {
    return String(arr).split(',')
}
console.log(flatarray(arr));