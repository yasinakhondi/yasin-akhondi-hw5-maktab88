const sampleArray = [10, [25, 13], [14, [[11], 55]], 2];
let count = 0;
const getDepth = function (array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (Array.isArray(element)) {
            count += 1;
            getDepth(element);
        }
    }
    return count;
};

console.log(getDepth(sampleArray));