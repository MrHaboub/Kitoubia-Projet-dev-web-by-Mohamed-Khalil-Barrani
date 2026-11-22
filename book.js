var titles = ["", "A Second Match", "The Trumpet of the Swan", "My 60 Memorable Games"];
var prices = ["", "25 DT", "30 DT", "35 DT"];
var id = new URLSearchParams(location.search).get("id") || 1;

document.getElementById("book-title").textContent = titles[id];
document.getElementById("book-price").textContent = prices[id];
document.getElementById("book-image").src = "images/" + id + "div.png";

// Check the form
function check() {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var message = document.getElementById("message");

    message.style.color = "red";

    if (name == "") {
        message.textContent = "Please enter your full name.";
    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        message.textContent = "Please enter a valid e-mail.";
    } else if (city == "") {
        message.textContent = "Please select your city.";
    } else {
        message.style.color = "green";
        message.textContent = "Thank you " + name + "! Your book will be delivered to " + city + ".";
    }

    return false;
}
