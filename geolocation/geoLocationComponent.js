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
          var googleLatLong = new google.maps.LatLng(coords.latitude, coords.longitude);
          //Specify Google map with Properties
          var mapOptions = {
            zoom:15,
            center:googleLatLong,
            mapTypeId:'roadmap'
          };
          var mapDiv = document.getElementById('mapArea');
          var myGoogleMap = new google.maps.Map(mapDiv,mapOptions);
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
