/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    let result = [];
    
    function parenthesisGenerator (left, right, string) {
        if (!left && !right) return result.push(string);

        if (left) parenthesisGenerator(left-1, right, string + "(");

        if (right > left) parenthesisGenerator(left, right - 1, string + ")");
    }
    
    parenthesisGenerator(n, n, "");

    return result;
};
