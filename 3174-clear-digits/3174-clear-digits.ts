function clearDigits(s: string): string {
  let result;
  
  for (let i = 0; i < s.length; i++) {
    const char = parseInt(s[i], 10);
    
    if (!isNaN(char)) {
      if (i > 1) {
        result = s.slice(0, i - 1) + s.slice(i + 1);
        
        return clearDigits(result);
      } else {
        result = s.slice(i + 1);
        
        return clearDigits(result);
      }
    }
  }
  
  return s;
};
