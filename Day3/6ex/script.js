//When you enter in the field a value, then write it to the list
$("#addme").on("click", event=> {
let text = $("textarea").val();

$("ul").append("<li>" + text + "</li>")
// To empty the field
$("textarea").val(``)
})


