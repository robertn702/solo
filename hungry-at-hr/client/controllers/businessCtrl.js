angular.module('hungry.business', [])

.controller('BusinessController', function($scope, $http) {
  $scope.init = function() {
    $http.get('/review').
      success(function(data, status, headers, config) {
        $scope.reviews = data;
      }).
      error(function(data, status, headers, config) {
        console.error('error getting reviews');
      });
    // $scope.resetForm();  
  };
  $scope.init();

  $scope.resetForm = function() {
    $scope.reviewForm.$setPristine();
    $scope.textareaplaceholder = "Enter your review here!";
  };

});