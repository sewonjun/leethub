function findWinningPlayer(skills: number[], k: number): number {
  let winCount = 0;
  let winner = skills[0];
  let winIndex = 0;
  
  const maxNum = Math.max(...skills);
  
  let i = 1;
  while(winCount < k) {
    const secondPlayer = skills[i];
    
    //가장 큰 숫자가 가장 앞자리에 도달했다면, 그 뒤로는 무조건 이기는 싸움. 
    if (winner === maxNum) break;
    
    if (winner < secondPlayer) {
      winner = secondPlayer;
      winIndex = i;
      winCount = 1;
    } else {
      winCount++;
    }
    i++;
  }

  return winIndex;
};

//1, 3, 7, 2, 4. k : 5

// 한번 순회를 마치면 무조건 가장 큰 수가 winner기 때문에, 그 뒤에 있는 k 들은 채우지 않아도 된다. 그냥 무조건 큰놈 return 하면 됨. 