function zigzag(inArr){
    const len= inArr.length
    inArr = inArr.sort((a,b)=>a-b);
    k= Math.floor(inArr.length/2)+1;
    let arr =[];

        for(let i=len-1;i>=0;i--){
            if(i<k-1){
                arr.unshift(inArr[i]);
            }else{        
                arr.push(inArr[i]);
            }
        }

    return arr.join(' ');
}
let arr= [1,2,3,4,5,6,7]
console.log(zigzag(arr));