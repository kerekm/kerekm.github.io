//Excercise 2
$(".north").text("Xmen");
$(".east").text("Ymen");
$(".west").text("Zmen");
$(".south").text("Wmen");

let color="purple";
let number=10;
let word="cool";

if (color==="purple") {
    $(".north").css("background","purple");
};

if (number>100) {
    $(".east").text("it is a big number")
} else {
    $(".east").text("just a normal number");
}

if (word==="cool"){
    $(".south").text("power of dom")
} else {
    $(".west").text("power of dom");    
}