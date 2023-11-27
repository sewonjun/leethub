/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function(piles, h) {
  let pivot = Math.ceil(piles.reduce((acc, cur) => {
    return acc = acc + cur;
  }, 0) / h )
  
  if (piles.length === 1) {
    return pivot;
  }

  while (true) {
    const predictedSpeed = predictSpeed(piles, pivot);

    if (predictedSpeed <= h) break;
    
    pivot++;
  }
  
  return pivot;
};

function predictSpeed(arr, k) {
  let count = 0;
  
  arr.forEach((el) => {
    count += Math.ceil(el/k);
  })
  
  return count;
}




