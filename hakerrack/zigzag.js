function zigzag(inArr){
    const len= inArr.length
    inArr = inArr.sort((a,b)=>a-b);
    k= Math.floor(inArr.length/2)+1;
    let arr =[];
    if(len % 2 === 1){

        arr.push(inArr[len-1]);
        
        for(let i=len-2;i>=0;i=i-2){
            arr.push(inArr[i]);
            arr.unshift(inArr[i-1]);
        }

    }else{
        
        arr.push(inArr[len-1]);
        arr.unshift(inArr[len-2]);
        
        for(let i=len-3;i>=0;i=i-2){
            arr.push(inArr[i]);
            arr.unshift(inArr[i-1]);
        }

    }
    return arr.join(' ');
}
let arr= [1,8,2,6,3,0,9,4,5,7,10,15]
console.log(zigzag(arr));