const matrix=[[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]];

const n = Math.floor(matrix.length/2)
let sums=[];
// console.log("OriginalMatrix",matrix)
let flippedMatrix= []
 

for(let i=0;i<matrix.length;i++){
    flippedMatrix[i]=[]
    for(let j=0;j<matrix[i].length;j++){
        flippedMatrix[i].push(matrix[i][j]);
   } 
}
// for(let i=0;i<matrix.length;i++){
//    for(let j=0;j<matrix[i].length;j++){
//     flippedMatrix[i][j]=matrix[j][i];
//    } 
// }


function circulateShiftCol(leng,flipMatrix){
    
    for (let i = 0; i < leng; i++) {
        const row = flipMatrix[i];
        const shiftedRow = row.slice(leng - 1).concat(row.slice(0, leng - 1));
        flipMatrix[i] = shiftedRow;
    }
    return flipMatrix;
}
for(let i=0;i<2*n-1;i++){
    circulateShiftCol(2*n, flippedMatrix)
    // console.log("Shifted", i,flippedMatrix)
    for(let i=0;i<2*n-1;i++){
        let row = flippedMatrix[i];
        // console.log("row",row);
        flippedMatrix.shift(1);
        flippedMatrix.push(row);
        // console.log("Shifted", i,flippedMatrix)
        
        let sum=0;
        for(let y=0; y<n;y++){
            for(let x=0; x<n;x++){
                sum +=flippedMatrix[x][y];
            }
        }
        sums.push(sum)
     }
 }
console.log("max of sums",Math.max(...sums));