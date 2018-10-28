let neighbours = ["martin","alzbeta","honza"];

neighbours.forEach(neigh=> {
    $("ul").append(`<li>` + neigh + `</li>`);
})

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using javascript's jQuery framework. How awesome!"
  };

$("body").append(`<h1>` + additionalBlock["title"] + `</h1>`);
$("body").append(`<p>` + additionalBlock["text"] + `<p>`)