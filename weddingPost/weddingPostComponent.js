(function(){
  angular.module('myApp').controller('weddingPostController',['$scope','$firebaseArray','$firebaseObject','fbRef',weddingPostController]);//end-controller
  function weddingPostController($scope,$firebaseArray,$firebaseObject,fbRef){
    var vm = $scope;
    var myRef = fbRef.getWeddingReference();
    var query = myRef.orderByChild("date"); //Order each key by their date property
    vm.chatList = $firebaseArray(query);
    vm.chatListObject = $firebaseObject(myRef);    
    vm.displayDate = function(value){
        var myDate = new Date(value);
        var formatedTime=myDate.toDateString();
        return formatedTime;
    };//end:displayDate

    vm.updateLike = function(inputObj){
      var currentLikeValue = inputObj.like;
      console.log('Current Like value of this is: ', currentLikeValue);
      vm.chatListObject[inputObj.$id].like = currentLikeValue + 1;
      vm.chatListObject.$save();
    };//end:updateLike

  }//end:weddingPostController

  angular.module('myApp').component('weddingPost',{
    templateUrl:'weddingPost/weddingPost.html',
    controller:weddingPostController
  });//end-component:weddingPost
}());//IIFE
