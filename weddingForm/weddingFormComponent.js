(function(){
  angular.module('myApp').controller('weddingFormController',['$scope','$firebaseArray','fbRef',weddingFormController]);//end-controller
  function weddingFormController($scope,$firebaseArray,fbRef){
    // debugger;
		var vm = $scope;
		vm.formInputObj = { comment:'', date: Firebase.ServerValue.TIMESTAMP, like:0, name:'' };
		vm.addPost = $firebaseArray(fbRef.getWeddingReference());
    vm.isSuccess = false;
    vm.userName = "";
    vm.clearPost = function(){
      vm.formInputObj = { comment:'', date: Firebase.ServerValue.TIMESTAMP, like:0, name:'' };
    };//end:clearPost

    vm.closeWindow = function(){
      vm.formInputObj = { comment:'', date: Firebase.ServerValue.TIMESTAMP, like:0, name:'' };
      vm.isSuccess = false;
    };//end:closeWindow

		vm.submitPost = function(inputObj){
			// console.info('Form input Object values are', inputObj);
			vm.addPost.$add(inputObj);
			vm.addPost.$save();
      vm.userName = inputObj.name;
      vm.isSuccess = true;
			//NOTE: Using Firebaseobject's add() to add new Posts
		};//end:submitPost
  }//end:weddingFormController

  angular.module('myApp').component('weddingForm',{
    templateUrl:'weddingForm/weddingForm.html',
    controller:weddingFormController
  });//end-component:weddingPost
}());//IIFE
