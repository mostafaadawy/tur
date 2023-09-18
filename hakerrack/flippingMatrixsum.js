function maxUpperLeftSum(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    let maxSum = 0;
    
    console.log('Original Matrix',matrix)

    for (let rowFlip = 0; rowFlip < n; rowFlip++) {
      for (let colFlip = 0; colFlip < m; colFlip++) {
        let flippedMatrix = matrix.map((row) => [...row]);
  
        // Reverse rows and columns based on flips
        if (rowFlip % 2 === 1) {
          flippedMatrix[rowFlip - 1].reverse();
        }
        if (colFlip % 2 === 1) {
          for (let i = 0; i < n; i++) {
            flippedMatrix[i][colFlip - 1] = 1 - flippedMatrix[i][colFlip - 1];
          }
        }
  
        let currentSum = 0;
        for (let i = 0; i < Math.ceil(n / 2); i++) {
          for (let j = 0; j < Math.ceil(m / 2); j++) {
            currentSum += flippedMatrix[i][j];
          }
        }
  
        maxSum = Math.max(maxSum, currentSum);
      }
    }
  
    return maxSum;
  }
  
  // Example usage:
  const matrix = [
    [1, 2],
    [3, 4],
  ];
  
  const result = maxUpperLeftSum(matrix);
  console.log(result); // Output: 4
  