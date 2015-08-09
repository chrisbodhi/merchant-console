'use strict';

angular.module('myApp.merchant', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/merchant', {
    templateUrl: 'merchant/merchant.html',
    controller: 'MerchantController'
  });
}])

.controller('MerchantController', [function() {

}]);