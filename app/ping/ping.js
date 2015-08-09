'use strict';

angular.module('myApp.ping', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ping', {
    templateUrl: 'ping/ping.html',
    controller: 'PingController'
  });
}])

.controller('PingController', [function() {

}]);