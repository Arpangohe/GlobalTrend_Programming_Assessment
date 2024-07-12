function evaluatePostfix(postfixTokens, operators) {
    const stack = [];

    for (const token of postfixTokens) {
        if (/[\d\.]+/.test(token)) {
            stack.push(parseFloat(token));
        } else if (token in operators) {
            const secondOperand = stack.pop();
            const firstOperand = stack.pop();
            const result = operators[token](firstOperand, secondOperand);
            stack.push(result);
        }
    }

    return stack[0];
}
