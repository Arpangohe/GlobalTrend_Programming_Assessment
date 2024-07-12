function generateFibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let fibSequence = [0, 1];
        for (let i = 2; i < n; i++) {
            fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
        }
        return fibSequence;
    }
}
const n = 10;
const fibSequence = generateFibonacci(n);
console.log(fibSequence);  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
