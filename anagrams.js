function areAnagrams(str1, str2) {
    return [...str1].sort().join('') === [...str2].sort().join('');
}
const str1 = "listen";
const str2 = "silent";
console.log(areAnagrams(str1, str2));  // Output: true
