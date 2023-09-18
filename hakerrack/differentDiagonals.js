let xy= [[1,2,3],[4,5,6],[9,8,9]]

function diagonalDifference(a){
    let resut =0;
    let leftDiagonal = []
    let rightDiagonal = [0,0]
    for(let y=0;y<a.length;y++){
        for(let x=0;x<a[y].length;x++){
            if(x===y) {
                leftDiagonal.push(a[y][x])
                rightDiagonal.push(a[a.length-1-y][x])
            }
        }
    }
    resut = Math.abs(leftDiagonal.reduce((a,b)=>a+b,0)  - rightDiagonal.reduce((a,b)=>a+b,0))
    return resut;
}
let res = diagonalDifference(xy);
console.log(res);