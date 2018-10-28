//When you load the page the old posts should load from database
//This method is triggered once when the listener is attached and again every time the data, including children, changes.
fb.ref("posts").once('value').then(data => {
    let savedPosts = data.val();
    console.log(savedPosts);
    savedPosts.forEach(post=> {
        $("ul").append("<li> <span>" +post.title + "</span> " +post.text + "</li>")
    });
});

//When you enter in the field a value, then write it to the list
$("#submit").on("click", event=> {
    let textCon = $("textarea").val();
    let textTit = $("#name").val();
    $("ul").append("<li> <span>" +textTit + "</span> " +textCon + "</li>")

    let path = "posts/"+$("li").length;
    let dataToSave = {
      title: textTit,
      text: textCon
    };
    
    fb.ref(path).set(dataToSave);

// To empty the field
$("textarea").val(``)
$("#name").val(``)
})