let s:string = String(prompt("nhập vào chuỗi cần kiểm tra"));
let s1:string=" ";
for(let i:number=s.length-1; i>=0; i--){
    s1+=s[i];
}
if(s===s1){
    console.log("True");
}
else{
    console.log("False");
}