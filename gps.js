function getDistance(gpsCoordinates) {
    var latitude2 = gpsCoordinates[0];              // received latitude
    var longitude2 = gpsCoordinates[1];             // received longitude
    var latitude1 = 49.893715;                     // my latitude
    var longitude1 = -97.054934;                    // my longitude
    var radius = 6371;                              // Radius of the earth in km
    var dLat = degToRad(latitude2 - latitude1);    // Degree to radius conversion
    var dLon = degToRad(longitude2 - longitude1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degToRad(latitude1)) * Math.cos(degToRad(latitude2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = radius * c;                                  // Distance in km
    var rounded = (Math.round(distance * 100) / 100)            // round it to 2 decimals
    console.log("You are " + rounded + "KM away");              // print the distance
    return rounded;
} module.exports = getDistance;

function degToRad(deg) {
    return deg * (Math.PI / 180)
}