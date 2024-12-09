// sắp xếp mảng
let arr1:number[] = new Array(10);
for(let i:number=0; i<arr1.length; i++){
    arr1[i] = Number(prompt());
}
for(let i:number=0; i<arr1.length; i++){
    for(let j:number = i+1; j<arr1.length; j++){
        if(arr1[j]>arr1[i]){
            let tmp:number = arr1[i];
            arr1[j]=arr1[i];
            arr1[j] = tmp;
        }
        
    }
}
for(let i:number=0; i<arr1.length; i++){
    console.log(arr1[i]+" ");
}