/*
* name: googleMapLoaderService
* Loader service for Google Map API
*/
(function(){
  // Google async initializer needs global function, so we use $window
angular.module('myApp')
    .factory('initializerGoogleMaps', ['$window','$q',function($window, $q){
      return {
          // usage: initializerGoogleMaps.mapsInitialized.then(callback)
          mapsInitialized : mapsInitialized
      };
      //function mapsInitialized
      function mapsInitialized(){
      var mapsDefer = $q.defer();
      // Google's url for async maps initialization accepting callback function
      var asyncUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCSL5fxrTbT-3BnC_g-evmuGtJo9UuwF5U&callback=';
      // async loader
      var asyncLoad = function(asyncUrl, callbackName) {
        var script = document.createElement('script');
        //script.type = 'text/javascript';
        script.src = asyncUrl + callbackName;
        document.body.appendChild(script);
      };
      // callback function - resolving promise after maps successfully loaded
      $window.googleMapsInitialized = function () {
          mapsDefer.resolve();
      };
      // loading google maps
      asyncLoad(asyncUrl, 'googleMapsInitialized');
      return mapsDefer.promise;
    }//end:mapsInitialized
  }]);//end:factory
}());//IIFE
