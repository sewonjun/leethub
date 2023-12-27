/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const target = digits.join("");
  const plusedTarget = BigInt(target) + 1n;

  return String(plusedTarget).split("");
};