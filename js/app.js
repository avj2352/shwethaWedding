(function(){
  angular.module('myApp',['firebase']);
  /*Declaring Firebase URL constants and Angular-Firebase Instances*/
  angular.module('myApp').constant('weddingUrl','https://shwethapramodwedding.firebaseio.com/');
  /*Angular Firebase service*/
  angular.module('myApp').service('weddingRef',['weddingUrl',Firebase]);
  /*main Factory service to get all Firebase References*/
  angular.module('myApp').factory('fbRef',['weddingRef',fbRef]);
  function fbRef(weddingRef){
    return{
      getWeddingReference: getWeddingReference
    };
    function getWeddingReference(){
      return weddingRef.child('chatbox');
    }//end:getWeddingReference
  }//end:fbRef factory service
  angular.module('myApp').factory('geoLocationService', ['$q', '$window', geoLocationService]);
  function geoLocationService($q, $window) {
      return {
          getCurrentPosition: getCurrentPosition,
          watchCurrentPosition: watchCurrentPosition,
          setDestinationPosition:setDestinationPosition
      };
      //Function to get the Current Location of the device
      function getCurrentPosition() {
          var deferred = $q.defer();
          if (!$window.navigator.geolocation) {
              deferred.reject('Geolocation not supported.');
          } else {
              //getCurrentPosition can take two arguments both which are function, one for success and another for error
              $window.navigator.geolocation.getCurrentPosition(
                  function(position) {
                      deferred.resolve(position);
                  },
                  function(err) {
                      deferred.reject(err);
                  });
          }
          return deferred.promise;
      } //end:getCurrentPosition

      function setDestinationPosition(){
        var deferred = $q.defer();
        if (!$window.navigator.geolocation) {
            deferred.reject('Geolocation not supported.');
        } else {
            //getCurrentPosition can take two arguments both which are function, one for success and another for error
            $window.navigator.geolocation.getCurrentPosition(
                function(position) {
                    deferred.resolve(position);
                },
                function(err) {
                    deferred.reject(err);
                });
        }
        return deferred.promise;
      }//end:setDestinationPosition

      //Function to get the Keep track of the device
      function watchCurrentPosition() {
          var deferred = $q.defer();
          if (!$window.navigator.geolocation) {
              deferred.reject('Geolocation not supported.');
          } else {
              //watchCurrentPosition can take two arguments both which are function, one for success and another for error
              $window.navigator.geolocation.watchPosition(
                  function(position) {
                      deferred.resolve(position);
                  },
                  function(err) {
                      deferred.reject(err);
                  });
          }
          return deferred.promise;
      } //end:watchCurrentPosition
  } //end:geoLocationService

  /*main Application controller*/
  angular.module('myApp').controller('mainController',['$scope',mainController]);
  function mainController($scope){
    // debugger;
    var vm = $scope;
    vm.postBtn = "Post a Wish";
    vm.venueBtn = "Venue Details";
    vm.nextPage = "Next Page";
    vm.prevPage = "Previous Page";

    vm.turnNext = function(){
      $('.magazine').turn("next");
    };//end:turnNext

    vm.turnPrev = function(){
      $('.magazine').turn("previous");
    };//end:turnPrev


  }//end:mainController
}());//IIFE
/*Reverse filter to reverse the Array items*/
(function(){
  angular.module('myApp')
    .filter('reverse', function() {
      return function(items) {
        return items.slice().reverse();
      };
    });//reverseFunction
}());//IIFE
