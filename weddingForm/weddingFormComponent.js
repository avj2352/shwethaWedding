(function(){
  angular.module('myApp').controller('weddingFormController',['$scope',weddingFormController]);//end-controller
  function weddingFormController($scope){
    var vm = $scope;
  }//end:weddingFormController

  angular.module('myApp').component('weddingForm',{
    templateUrl:'weddingForm/weddingForm.html',
    controller:weddingFormController
  });//end-component:weddingPost
}());//IIFE
