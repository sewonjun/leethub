function findWinningPlayer(skills: number[], k: number): number {
  let winCount = 0;
  let winner = skills[0];
  let winIndex = 0;
  
  const maxNum = Math.max(...skills);
  
  let i = 1;
  
  while(winCount < k) {
    const secondPlayer = skills[i];

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
