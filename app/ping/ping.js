'use strict';

angular.module('myApp.ping', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ping', {
    templateUrl: 'ping/ping.html',
    controller: 'PingController'
  });
}])

.controller('PingController', ['$scope', function($scope) {
  $scope.pings = [
    {event: "Bourbon special", end: "8/12/15"},
    {event:"Welcome the new barback", end: "8/22/15"},
    {event:"Yer favorite band", end: "8/22/15"},
    {event:"Quarter moon", end: "8/22/15"},
    {event:"Book release party", end: "8/22/15"}
  ];
}]);