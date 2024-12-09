let a:number[]=new Array(10);
let min:number = a[0];
let max:number = a[0];
for(let i:number=0; i<a.length; i++){
    a[i] = Number(prompt());
}
for(let i: number=1; i<a.length; i++){
    if(a[i]>max){
        max = a[i];
    }
}
for(let i:number=1; i<a.length; i++){
    if(a[i]<min){
        min = a[i];
    }
}
console.log(max);
console.log(min);