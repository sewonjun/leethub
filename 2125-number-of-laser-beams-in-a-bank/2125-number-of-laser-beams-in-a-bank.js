/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
  let result = 0;
  let currentBeamCount = null;
  
  bank.forEach((arr) => {
    const beamCount = arr.split("").filter(el => el === "1").length;

    if (beamCount) {
      if (currentBeamCount !== null) {
        result += currentBeamCount * beamCount;
      }
      
      currentBeamCount = beamCount;
    }
  })
  
  return result;
};