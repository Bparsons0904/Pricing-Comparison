var app = angular.module('myApp', []);

app.controller('appController', function($scope) {
  $scope.currentHome = "";
  $scope.currentPhone = "";
  $scope.newHome = 555;
  $scope.newPhone = "";
  $scope.monthlySavings = function() {
    return $scope.currentHome + $scope.currentPhone - $scope.newPhone - $scope.newHome;
  };
  $scope.yearlySavings = function() {
    return ($scope.monthlySavings())*12;
  };
});

app.directive("w3TestDirective", function() {
    return {
      restrict: 'EA',
      scope: {name: '='},
      controller: "appController",
      template: "<h1>{{yearlySavings()}}</h1>",
    };
});

// app.controller('discountsController', function($scope) {
//   $scope.discounts = "This is discounts";
//   $scope.test = function() {
//     return $scope.currentHome + $scope.currentPhone;
//   }
// });
