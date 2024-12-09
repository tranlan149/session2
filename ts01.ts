let arr:number[]= new Array(10);
let cnt:number = 0;
for(let i:number=0; i<arr.length; i++){
    arr[i] = Number(prompt());
}
for(let i:number=0; i<arr.length; i++){
    if(arr[i]>=10){
        cnt++;
    }
}
console.log(cnt);