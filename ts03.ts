let n:number = Number(prompt());
let b:number[] = new Array(n);
for(let i:number=0; i<b.length; i++){
    b[i] = Number(prompt());
}
for(let i:number=b.length-1; i>=0; i--){
    console.log(b[i]+" ");
}