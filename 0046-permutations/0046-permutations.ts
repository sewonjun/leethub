function permute(nums: number[]): number[][] {
    if (nums.length === 1) return [nums];

    const result = [];
    for (let i = 0; i < nums.length; i++) {
      const restArr = [...nums.slice(0, i), ...nums.slice(i + 1)];
      const permutations = permute(restArr);

      permutations.forEach(el => {
        if (Array.isArray(el)){
          result.push([nums[i], ...el]) 
        } else {
          result.push([nums[i], el])
        }
      })
    }

    return result;
};

// function recursion(arr) {
//   if (arr.length === 1) return arr;
  
//   let result = [];

//   for(let i = 0; i < arr.length; i++) {
//     const restArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
//     const piece = recursion(restArr);

//     piece.forEach(el => {
//       if (Array.isArray(el)){
//           result.push([arr[i], ...el])
//         } else {
//            result.push([arr[i], el])
//         }
//     })
//   }

//   return result;
// }