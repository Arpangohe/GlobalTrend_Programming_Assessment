function flattenArray(arr) {
    return arr.reduce((acc, current) => {
        if (Array.isArray(current)) {
            return acc.concat(flattenArray(current));
        } else {
            return acc.concat([current]);
        }
    }, []);
}
const nestedArray = [1, 2, [3, 4, [5, 6]], 7, 8, [9, 10]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
