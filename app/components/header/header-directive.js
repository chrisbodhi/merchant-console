'use strict';

angular.module('myApp.header', [])
.controller('HeaderController', ['$scope', function($scope) {
  $scope.signedIn = false;
}])
.directive('appHeader', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/header/header.html'
  };
});