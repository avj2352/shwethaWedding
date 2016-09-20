(function(){
  angular.module('myApp').controller('weddingPostController',['$scope','$firebaseArray','fbRef',weddingPostController]);//end-controller
  function weddingPostController($scope,$firebaseArray,fbRef){
    var vm = $scope;
    var myRef = fbRef.getWeddingReference();
    var query = myRef.orderByChild("date"); //Order each key by their date property
    vm.chatList = $firebaseArray(query);
  }//end:weddingPostController
  
  angular.module('myApp').component('weddingPost',{
    templateUrl:'weddingPost/weddingPost.html',
    controller:weddingPostController
  });//end-component:weddingPost
}());//IIFE
