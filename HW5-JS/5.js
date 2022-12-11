function sort(array) {
    if (!Array.isArray(array)) {
        return 'pleas enter array'
    }
    let res = [[], [], [], []];
    let delet = array.map(function (item) {
        return item.replaceAll("-", "")
    })
    for (let i = 0; i < 4; i++) {
        delet.forEach(function (item1) {
            if (!res[i].includes(item1[i])) {
                res[i].push(item1[i]);
            }
        })
    }
    return res;
}
console.log(sort(["a-b-c-d", "a-b-f-g", "m-n-l-k", "m-o-p-j", "v-q-w-e", "x-z-p-j"]));