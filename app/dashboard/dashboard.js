'use strict';

angular.module('myApp.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardController'
  });
}])

.controller('DashboardController', ['$scope', function($scope) {
//   $scope.check = 'checked out';
}]);