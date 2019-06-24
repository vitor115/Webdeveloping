function changeTitle() {
    var name = document.getElementById("name").value;
    document.getElementById("title").textContent+=" " + name + " you are the best!"; 
    var message = "<h3>Please let us know if you like our Site, " + name + ", your opnion is very important! </h3>"
    document.getElementById("content").innerHTML = message;
}