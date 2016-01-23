var app = angular.module('PostService', [])

.service('PostService', function($http) {
  var service = this;

  service.allPosts = function() {
    $http({
      method: 'GET',
      url: 'http://jsonplaceholder.typicode.com/posts'
    })
    .then(function allPosts(response) {
      //console.log('RESPONSE ' + angular.toJson(response, true));
    }),
    function error(response) {
      console.log('ERROR ' + response);
    }
  },

  service.postById = function(postId){
    $http({
      method: 'GET',
      url: 'http://jsonplaceholder.typicode.com/posts/'
    })
    .then(function allPosts(response) {
      console.log('RESPONSE ' + angular.toJson(response, true));
    }),
    function error(response) {
      console.log('ERROR ' + response);
    }
  }
});
