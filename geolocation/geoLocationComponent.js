(function() {


    angular.module('myApp').controller('geoLocationController', ['$scope', 'geoLocationService', geoLocationController]);

    function geoLocationController($scope, geoLocationService) {
        var vm = $scope;
        // debugger;
        vm.title = "Venue Map";
        vm.geoLocationText = "";
        vm.geoTimeStamp = "";
        vm.isLoadedMap = "false";
        var geoCurrPosService = geoLocationService.getCurrentPosition();
        geoCurrPosService.then(function(data) {
            // if(Object.prototype.toString.call(data) === '[object Geolocation]'){
            var latitude = data.coords.latitude;
            var longitude = data.coords.longitude;
            if (data.timestamp) {
                var mydate = new Date(data.timestamp);
                vm.geoTimeStamp = mydate;
            } //endif
            vm.geoLocationText = "Latitude: " + latitude + " , Longitude: " + longitude;
            vm.showMap(data.coords); // Invoke the Google Map here
            // }else{
            // vm.geoLocationText = "Value returned is not an Object";
            // }
        }); //then()

        vm.showMap = function(coords){
          // debugger;
          //Methodist Church - 12.963642, 77.603229
          //Vasavi Convention Hall - 12.948761, 77.576213
          //Centre loction to both - 12.958585, 77.586993
          //12.954674, 77.588109
          var methodistChurchLatLong = {lat: 12.963642, lng: 77.603229};
          var vasaviChurchLatLong = {lat: 12.948761, lng: 77.576213}; //12.948761, 77.576213
          var centreLocation = {lat:12.957791, lng:77.589053};//12.957791, 77.589053
          var googleLatLong = new google.maps.LatLng(12.954674, 77.588109); //12.954674, 77.588109
          //Specify Google map with Properties
          var mapOptions = {
            zoom:14,
            center:googleLatLong,
            mapTypeId:'roadmap'
          };
          var mapDiv = document.getElementById('mapArea');
          var myGoogleMap = new google.maps.Map(mapDiv,mapOptions);
          //INFO:Setting a Marker to the Methodist Church
          var markerChurch = new google.maps.Marker({
              position: methodistChurchLatLong,
              map: myGoogleMap,
              title: 'Wedding Methodist Church',
              clickable:true
          });

          //Setting InfoWindow for Methodist Church
          var infoWindowChurch = new google.maps.InfoWindow({
            maxWidth: 200,
          });
          infoWindowChurch.setContent('<h5><strong>Wedding:</strong></h5><p>Methodist Church, No.4, Kingston Road, Richmond Town, Bengaluru, Karnataka</p><p><a target="_blank" href="https://www.google.co.in/maps/dir/Methodist+Church,+No.4,+Kingston+Road,+Richmond+Town,+Bengaluru,+Karnataka+560025/Vasavi+Convention+Center,+Vanivilas+Road,+VV+Puram,+Bengaluru,+Karnataka+560004/@12.9581203,77.5804271,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x110571bfb555bc97:0x9c36e5d69663c2dc!2m2!1d77.6032373!2d12.9636302!1m5!1m1!1s0x3bae15ec317ff977:0x8c8ae92292729817!2m2!1d77.5761808!2d12.9485622?hl=en">Open in Google Maps</a></p>');
          infoWindowChurch.open(myGoogleMap,markerChurch);

          //Setting a Marker to the Vasavi Convention Centre
          var markerHall = new google.maps.Marker({
              position: vasaviChurchLatLong,
              map: myGoogleMap,
              title: 'Vasavi Convention Centre',
              clickable:true
          });

          //Setting InfoWindow for Methodist Church
          var infoWindowHall = new google.maps.InfoWindow({
            maxWidth: 200,
          });
          infoWindowHall.setContent('<h5><strong>Reception:</strong></h5><p>Vasavi Convention Center, Vanivilas Road, VV Puram, Bengaluru, Karnataka 560004</p><p><a target="_blank" href="https://www.google.co.in/maps/dir/Methodist+Church,+No.4,+Kingston+Road,+Richmond+Town,+Bengaluru,+Karnataka+560025/Vasavi+Convention+Center,+Vanivilas+Road,+VV+Puram,+Bengaluru,+Karnataka+560004/@12.9581203,77.5804271,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x110571bfb555bc97:0x9c36e5d69663c2dc!2m2!1d77.6032373!2d12.9636302!1m5!1m1!1s0x3bae15ec317ff977:0x8c8ae92292729817!2m2!1d77.5761808!2d12.9485622?hl=en">Open in Google Maps</a></p>');
          infoWindowHall.open(myGoogleMap,markerHall);



        };//end:showMap


    } //end:geoLocationController

    angular.module('myApp').component('geoMap', {
        templateUrl: 'geolocation/geoLocationWindow.html',
        controller: geoLocationController
    }); //end:component-geoMap
}()); //IIFE
