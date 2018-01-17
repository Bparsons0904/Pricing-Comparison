// var discountsApp = angular.module("discountsApp", []);

var app = angular.module("myApp", []);
app.directive("w3TestDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});

var discountApp = angular.module('discountApp', []);

discountApp.controller('discountController', function($scope) {
  $scope.currentHome = 55;
  $scope.currentPhone = "";
  $scope.newHome = "";
  $scope.newPhone = "";
  $scope.monthlySavings = function() {
    return $scope.currentHome + $scope.currentPhone;
  };
  $scope.yearlySavings = function() {
    return ($scope.currentHome + $scope.currentPhone - $scope.newPhone - $scope.newHome)*12;
  };
});

// var discountsApp = angular.module('discountsApp', []);
//
// angular.
//   module('discountsApp').
//   component('discountsList', {
//     template:
//         '<ul>' +
//           '<li ng-repeat="phone in $ctrl.phones">' +
//             '<span>{{phone.name}}</span>' +
//             '<p>{{phone.snippet}}</p>' +
//           '</li>' +
//         '</ul>',
//     controller: function discountsController() {
//       this.phones = [
//         {
//           name: 'Nexus S',
//           snippet: 'Fast just got faster with Nexus S.'
//         }, {
//           name: 'Motorola XOOM™ with Wi-Fi',
//           snippet: 'The Next, Next Generation tablet.'
//         }, {
//           name: 'MOTOROLA XOOM™',
//           snippet: 'The Next, Next Generation tablet.'
//         }
//       ];
//     }
//   });
