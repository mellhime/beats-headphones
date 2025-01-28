function initMap(){
    var myMap = new ymaps.Map("map", {
        center: [55.75236049196043,37.60418352836097],
        zoom: 14
    });

    const pointsCoords = [
        [55.752004068967054, 37.576133000000034],
        [55.749851224913584, 37.60342719104364],
        [55.7583690481418, 37.622110472530785],
        [55.75732861479902, 37.575736912577405]
    ];
    const pointsCollection = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: './images/icons/marker.png',
        iconImageSize: [58, 73],
        iconImageOffset: [-3, -42]
    });

    for (let i = 0; i < pointsCoords.length; i++) {
        // TODO maybe get the address instead of shop number
        pointsCollection.add(new ymaps.Placemark(pointsCoords[i], { hintContent: `Магазин №${i + 1}`}));
    }

    myMap.geoObjects.add(pointsCollection);
    myMap.behaviors.disable('scrollZoom');
}

export { initMap }
