angular.module('hungry.home', [])

.controller('HomeController', function($scope, $state, $http, $stateParams) {
  $scope.searchItems = ['hungry', 'thirsty', 'studious'];
  $scope.showHeaderIcons = true;

  var init = function($scope) {
    // sets up css for home screen
    if ($state.is('home')) {
      angular.element(document.querySelector('header.home')).addClass('home-header');
      angular.element(document.querySelector('.background-gradient')).addClass('background-gradient-home').removeClass('background-gradient');
      $scope.showHeaderIcons = false;
    };

    //checks if user is logged in
    loggedIn();

    // gets business data
    getData();

    // initally don't show modal
    $scope.show_modal = false;

    // persists the filter value
    $scope.searchItem = setFilterValue($scope.searchItems, $stateParams);
  };

  // makes http request to get array of businesses
  var getData = function() {
    $http.get('/business').
      success(function(data, status, headers, config) {
        $scope.data = data;
      }).
      error(function(data, status, headers, config) {
        console.error('error getting business data');
      });
  };

  var loggedIn = function() {
    $http.get('/logged-in').
      success(function(data, status, headers, config) {
        $scope.isLoggedIn = data.result;
      }).
      error(function(data, status, headers, config) {
        console.error('error getting authentication data');
      });
  };

  // persits the filter value
  var setFilterValue = function(filtersArray, params) {
    if (params.filterNum)
      return filtersArray[params.filterNum];
    else
      return filtersArray[0];
  };

  init($scope);

////// MODAL
  $scope.showModal = function() {
    $scope.show_modal = true;
  };

  $scope.closeModal = function(){
    $scope.show_modal = false;
  };
////// END MODAL

  $scope.startSearch = function(keyEvent, filterName) {
    $scope.showHeaderIcons = true;
    if (keyEvent.which === 13) {
      $state.go('home.search', { filterNum: $scope.searchItems.indexOf(filterName) });
      angular.element(document.querySelector('header.home')).removeClass('home-header');
      angular.element(document.querySelector('.background-gradient-home')).addClass('background-gradient').removeClass('background-gradient-home');
    }
  };

  // allows user to ng-repeat set number of times
  $scope.repeatXTimes = function(x) {
    return new Array(x);
  };

});
