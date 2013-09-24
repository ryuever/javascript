function assert(value, desc){
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";   // assigns a class named pass or fail,depending on value
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
}
