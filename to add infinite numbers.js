n=prompt("how many numbers do you want to add?");
n=parseInt(n);
let sum=0;
for(let i=1;i<=n;i++){
    let num=prompt("enter number");
    num=parseInt(num);
    sum+=num; 
}
console.log(sum);