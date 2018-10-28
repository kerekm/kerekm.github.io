// Loop in an array and for the numbers divideable by three or five name them differently
let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

number.forEach(num => {
    console.log(num);

        if (num%3===0 && num%5===0) {
        console.log("fizzbuzz")
    }
        else if(num%5===0) {
        console.log("buzz")
    } 
        else if(num%3===0) {
        console.log("fizz")
    } 
});
