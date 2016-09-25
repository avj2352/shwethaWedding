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
          var methodistChurchLatLong = {lat: 12.963642, lng: 77.603229};
          var vasaviChurchLatLong = {lat: 12.948761, lng: 77.576213}; //12.948761, 77.576213
          var centreLocation = {lat:12.958585, lng:77.586993};//12.958585, 77.586993
          var googleLatLong = new google.maps.LatLng(12.958585, 77.586993);
          //Specify Google map with Properties
          var mapOptions = {
            zoom:14,
            center:googleLatLong,
            mapTypeId:'roadmap'
          };
          var mapDiv = document.getElementById('mapArea');
          var myGoogleMap = new google.maps.Map(mapDiv,mapOptions);
          //Setting a Marker to the Google Maps location
          var marker1 = new google.maps.Marker({
              position: methodistChurchLatLong,
              map: myGoogleMap,
              title: 'Wedding Methodist Church'
          });
          //Setting another marker to the Google Maps Location
          var marker2 = new google.maps.Marker({
              position: vasaviChurchLatLong,
              map: myGoogleMap,
              title: 'Vasavi Convention Centre'
          });
          if(myGoogleMap){
              vm.isLoadedMap = true;
          }//end:myGoogleMap is loaded
        };//end:showMap

        vm.computeTotalDistance = function() {
            console.log("computeTotalDistance");
        }; //end:computeTotalDistance

        vm.startTacking = function() {
            console.log("Start Tracking");
        }; //end:startTacking

        vm.clearTracking = function() {
            console.log("Clear Tracking");
        }; //end:clearTracking

    } //end:geoLocationController

    angular.module('myApp').component('geoMap', {
        templateUrl: 'geolocation/geoLocationWindow.html',
        controller: geoLocationController
    }); //end:component-geoMap
}()); //IIFE
