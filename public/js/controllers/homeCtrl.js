angular.module('hungry.list', [])

.controller('HomeController', function($scope, $http) {
  $scope.init = function() {
    // $http.get('/business').
    //   success(function(data, status, headers, config) {
    //     $scope.businesses = data;
    //   }).
    //   error(function(data, status, headers, config) {
    //     console.error('error');
    //   });
  };
  $scope.init();
  $scope.searchItems = ['Eat', 'Drink', 'Study'];
  $scope.map = {
    center: { latitude: 37.783748, longitude: -122.409046 },
    zoom: 14
  };
});
