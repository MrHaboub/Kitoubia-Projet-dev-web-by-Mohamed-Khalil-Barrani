
var books = {
    "1": { title: "A Second Match", author: "Eleanor Vance", price: 25, image: "images/1div.png" },
    "2": { title: "The Trumpet of the Swan", author: "E. B. White", price: 30, image: "images/2div.png" },
    "3": { title: "My 60 Memorable Games", author: "Bobby Fischer", price: 35, image: "images/3div.png" }
};


var id = new URLSearchParams(window.location.search).get("id");
var book = books[id] || books["1"];

document.getElementById("book-image").src = book.image;
document.getElementById("book-title").textContent = book.title;
document.getElementById("book-author").textContent = "by " + book.author;
document.getElementById("book-price").textContent = book.price + " DT";


var cities = ["Ariana", "Beja", "Ben Arous", "Bizerte", "Gabes", "Gafsa", "Jendouba",
    "Kairouan", "Kasserine", "Kebili", "Kef", "Mahdia", "Manouba", "Medenine",
    "Monastir", "Nabeul", "Sfax", "Sidi Bouzid", "Siliana", "Sousse",
    "Tataouine", "Tozeur", "Tunis", "Zaghouan"];

var select = document.getElementById("city");
for (var i = 0; i < cities.length; i++) {
    var option = document.createElement("option");
    option.value = cities[i];
    option.textContent = cities[i];
    select.appendChild(option);
}

document.getElementById("order-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    var name = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var city = select.value;
    var valid = true;

    if (name.length < 3) {
        document.getElementById("fullname-error").textContent = "Please enter your full name.";
        valid = false;
    } else {
        document.getElementById("fullname-error").textContent = "";
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("email-error").textContent = "Please enter a valid e-mail.";
        valid = false;
    } else {
        document.getElementById("email-error").textContent = "";
    }

    if (city === "") {
        document.getElementById("city-error").textContent = "Please select your city.";
        valid = false;
    } else {
        document.getElementById("city-error").textContent = "";
    }

    if (valid) {
        document.getElementById("success-message").textContent =
            "Thank you " + name + "! Your book will be delivered to " + city + ".";
    }
});
