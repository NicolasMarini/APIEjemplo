angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats, PostService) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  console.log('ChatsCtrl');
  $scope.posts = PostService.allPosts();
  //console.log('RESPONSE DESDE CONTROLLER' + $scope.posts);

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($stateParams) {
  //var i = $stateParams.postId;
  console.log('ChatDetailCtrl');
  alert('SDSDS');
  //$scope.chat = Chats.get($stateParams.chatId);
  //console.log("POSTID " + $routeParams.postId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
