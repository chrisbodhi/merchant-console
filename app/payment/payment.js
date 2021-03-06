'use strict';

angular.module('myApp.payment', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/payment', {
    templateUrl: 'payment/payment.html',
    controller: 'PaymentController'
  });
}])

.controller('PaymentController', ['$scope', function($scope) {
  $scope.months = ['Jan', 'Feb', 'Mar', 'Apr'];
}]);