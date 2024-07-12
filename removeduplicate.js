function removeDuplicates(arr) {
    return [...new Set(arr)];
}
const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr);  // Output: [1, 2, 3, 4, 5, 6]
