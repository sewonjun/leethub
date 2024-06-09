function clearDigits(s: string): string {
  // const stack = [];
  let stack = "";
  
  for (let i = 0; i < s.length; i++) {
    const char = parseInt(s[i], 10);
    
    if (isNaN(char)) {
      // stack.push(s[i]);
      stack = stack + s[i]
    } else {
      // stack.pop();
      stack = stack.slice(0, -1);
    }
  }
  
  // return stack.join("");
  return stack;
};
