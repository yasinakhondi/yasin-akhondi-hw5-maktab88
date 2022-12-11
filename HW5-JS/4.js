let string = 'hello world'
let leter = 'hel'


function findStr(string, leter) {
    let x = string.indexOf(string) === 0 === string.includes(leter)
    return x
}
console.log(findStr(string, leter));
