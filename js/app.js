(function(){
  angular.module('myApp',['firebase']);
  /*Declaring Firebase URL constants and Angular-Firebase Instances*/
  angular.module('myApp').constant('weddingUrl','https://sumitwedding.firebaseio.com/');
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
  /*main Application controller*/
  angular.module('myApp').controller('mainController',['$scope',mainController]);
  function mainController($scope){
    // debugger;
    var vm = $scope;
    vm.postBtn = "Post a Wish";
    vm.venueBtn = "Venue Details";
    vm.flipBtn = "Flip Card";

    vm.turnPage = function(context){
      $('.magazine').turn("next");
    };
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
