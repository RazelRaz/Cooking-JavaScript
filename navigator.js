navigator.geolocation.getCurrentPosition(function(position){
    const altitude =  position.coords.altitude;
    const latitude =  position.coords.latitude;
    const longitude =  position.coords.longitude;
    const speed =  position.coords.speed;
    

    document.write(altitude + "altitude");
    document.write(latitude + "latitude");
    document.write(longitude + "longitude");
    document.write(speed + "speed");

})

