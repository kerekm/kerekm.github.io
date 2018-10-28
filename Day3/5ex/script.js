//let counter = 0;
$("#clickme").on("click", event=> {
let counter = $("h2").text();

    counter++;

    $("h2").text(counter);
})
