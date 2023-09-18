const matrix = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
  ];
  
  const n = matrix.length;
  
  function calculateSum(matrix) {
    let sum = 0;
    for (let i = 0; i < n / 2; i++) {
      for (let j = 0; j < n / 2; j++) {
        sum += matrix[i][j];
      }
    }
    return sum;
  }
  
  let maxSum = -Infinity;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const sum = calculateSum(matrix);
      if (sum > maxSum) {
        maxSum = sum;
      }
  
      // Shift columns
      matrix.forEach(row => row.push(row.shift()));
    }
  
    // Shift rows
    matrix.push(matrix.shift());
  }
  
  console.log("max of sums", maxSum); // Output: 414
  