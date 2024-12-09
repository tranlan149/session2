let n1: number = Number(prompt());
let a2:number[] = new Array(n1);
let target:number = Number(prompt());
for(let i:number=0; i<a2.length; i++){
    a2[i]=Number(prompt());
}
for(let i:number=0; i<a2.length; i++){
    for(let j:number=0; j<a2.length; j++){
        if(a[i]+a[j]==target){
            console.log("["+i + ","+j+"]");
        }
    }
}