function lonelyinteger(a) {
    for(let i=0; i<a.length; i++){
        if(i<a.length-1){
            let tempArr=[...a];
            tempArr.splice(i,1);
            console.log(`Original Array ${a}`,`element: ${a[i]}`, `temparray= ${tempArr}`, tempArr.includes(a[i]))
            if(!tempArr.includes(a[i]))
                return a[i];
        }else{
            return a[i]
        }   
    }
}

let a = [0,0,1,2,1]
console.log(lonelyinteger(a))
