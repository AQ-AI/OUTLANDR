var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

function initMap() {
    var location = { lat: 22.5726, lng: 88.3639 };

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Flat 2B Garcha 1st Lane, Kolkata, IN 700019",
    });
}
