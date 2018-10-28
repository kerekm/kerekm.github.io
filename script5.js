let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(number);
number.forEach(num=>{
    if(num%2===0) {
        console.log(num);
    } else {
        console.log("odd");
    }
})