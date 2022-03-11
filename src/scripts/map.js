function initMap() {
    let location = {lat: 8.0300028, lng: -1.080027};
    let specificLocation = {lat: 4.909456, lng: -1.755881};
    let viewButtonOne  = document.getElementById('view-button-one');
    let viewButtonTwo  = document.getElementById('view-button-two');
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: location
    });

    const contentString = '<h3 class="dark-blue">Training Center</h3>';
    const infoWindowOne = new google.maps.InfoWindow({
        content: contentString
    });
    

    let marker = new google.maps.Marker({
        position: specificLocation,
        map: map
    });

    marker.addListener("click", () => {
        infoWindowOne.open(map, marker);
    });

    marker.addListener("click", () => {
        map.setZoom(16);
        map.setCenter(marker.getPosition());
    });

    viewButtonOne.addEventListener('click', () => {
        map.setZoom(16);
        map.setCenter(marker.getPosition());
    });
    viewButtonTwo.addEventListener('click', () => {
        map.setZoom(16);
        map.setCenter(marker.getPosition());
    });

}
