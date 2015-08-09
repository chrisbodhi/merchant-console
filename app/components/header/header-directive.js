'use strict';

angular.module('myApp.header', [])
.controller('HeaderController', ['$scope', function($scope) {
  $scope.signedIn = false;
  
  $scope.logIn = function(){
    $scope.signedIn = !$scope.signedIn;
  }
  
  $scope.logOut = function(){
    $scope.signedIn = !$scope.signedIn;
  }
}])
.directive('appHeader', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/header/header.html',
    controller: 'HeaderController'
  };
});