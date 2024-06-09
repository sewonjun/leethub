function clearDigits(s: string): string {
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
    const char = parseInt(s[i], 10);
    
    if (isNaN(char)) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  
  return stack.join("");
};
