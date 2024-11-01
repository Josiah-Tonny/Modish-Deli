function initialize() {
    var mapContainer = document.getElementById("map-canvas");
    mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7702358859265!2d36.891089773974265!3d-1.3133144356541777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f124be00d3e01%3A0x405909066f35811d!2sMODISH%20Deli!5e0!3m2!1sen!2ske!4v1730443675221!5m2!1sen!2ske" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
}
google.maps.event.addDomListener(window, 'load', initialize);