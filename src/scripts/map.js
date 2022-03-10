function initMap() {
    let location = {lat: 4.909456, lng: -1.755881};
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location
    });

    let markerVarOne = new google.maps.Marker({
        position: location,
        map: map
    });
}
