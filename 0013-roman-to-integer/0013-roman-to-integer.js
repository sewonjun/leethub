/**
 * @param {string} s
 * @return {number}
 */
const romanInteger = {
  I : 1,
  V : 5,
  X : 10,
  L : 50,
  C : 100,
  D : 500,
  M : 1000,
};
    
const specialRomanInteger = {
  IV : 4,
  IX : 9,
  XL : 40,
  XC : 90,
  CD : 400,
  CM : 900
}
    
var romanToInt = function(s) {
    let copyS = s;
    let result = 0;
    while (true) {
        const specialRoman = checkSpecialRoman(copyS);

        if (!specialRoman) break;

        copyS = copyS.replace(specialRoman, "");
        result += specialRomanInteger[specialRoman];
    }
    
    copyS.split("").forEach(el => result += romanInteger[el]);

    return result;
};
    
function checkSpecialRoman(string) {
    const specialRoman = Object.keys(specialRomanInteger);
    let result;

    for (let roman of specialRoman) {
        if (string.includes(roman)) return result = roman;
    }

  return result;
}

