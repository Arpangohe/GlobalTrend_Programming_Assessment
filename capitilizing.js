function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
let str = "hello global trend";
let titleCaseStr = toTitleCase(str);
console.log(titleCaseStr);  // Output: "Hello Global Trend"
