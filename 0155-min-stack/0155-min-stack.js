
var MinStack = function() {
    const result = [];
    this.result = result;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.result.push(val);  
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.result.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.result.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.result);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */