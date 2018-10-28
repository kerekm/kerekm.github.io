//Excercise 7
let book1 = {name:"stephen king", title:"Misery", year:"1980"};
console.log(book1);
console.log(book1["name"]);
console.log(book1["title"]);
console.log(book1["year"])
let book2 = {name:"terry pratchet", title:"Nomove", year:"1990"};
let book3 = {name:"a.c.clark", title:"Odysea", year:"1970"};
let bookArr=[book1,book2,book3];

console.log(bookArr);
bookArr.forEach(kniha=>{console.log(kniha)});
console.log(bookArr);


bookArr.forEach(book => {
    console.log(book["title"]);
});