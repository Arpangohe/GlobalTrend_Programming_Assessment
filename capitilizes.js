function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
const str = "hello global trends";
const capitalizedStr = capitalizeWords(str);
console.log(capitalizedStr);  // Output: "Hello Global Trends"
