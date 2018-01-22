var app = angular.module('myApp', []);
var discountMonthly = 0;

app.controller('appController', function($scope) {
  $scope.discountAmountMonthly = 0;
  $scope.discountAmountOneTime = 0;
  $scope.currentHome = "";
  $scope.currentPhone = "";
  $scope.newHome = "";
  $scope.newPhone = "";
  $scope.monthlySavings = function() {
    return $scope.currentHome + $scope.currentPhone - $scope.discountAmountMonthly - $scope.newPhone - $scope.newHome;
  };
  $scope.yearlySavings = function() {
    return ($scope.monthlySavings())*12;
  };
  $scope.discounts = discountData;;
  $scope.services = servicesData;
  $scope.packages = packageData;

  $scope.discountFunction = function(discount) {
    console.log(discount);
    discount.active = !discount.active;
    if (discount.amountMonthly) {
      if (discount.active == true) {
        $scope.discountAmountMonthly = $scope.discountAmountMonthly + discount.amountMonthly
      } else {
        $scope.discountAmountMonthly = $scope.discountAmountMonthly - discount.amountMonthly
      }
    } else {
      if (discount.active == true) {
        $scope.discountAmountOneTime = $scope.discountAmountOneTime + discount.amountOneTime
      } else {
        $scope.discountAmountOneTime = $scope.discountAmountOneTime - discount.amountOneTime
      }
    };
  };
  $scope.autopayShowDiscounts = false;
  $scope.unlmitedShowDiscounts = false;
  $scope.rewardShowDiscounts = false;
  $scope.closerShowDiscounts = false;
  $scope.wirelessShowDiscounts = false;
  $scope.hboShowDiscounts = false;
  $scope.serviceSelection = function(service) {
    var discountReset = ['autopay', 'unlimited', 'reward', 'closer', 'wireless', 'hbo'];
    for (var i = 0; i < discountReset.length; i++) {
      $scope.discounts[i].active = false;
    }
    $scope.discountAmountOneTime = 0
    $scope.discountAmountMonthly = 0
    for (var i = 0; i < discountReset.length; i++) {
      var focus = discountReset[i] + 'ShowDiscounts';
      var test = service.discounts.indexOf(discountReset[i]);
      if (test == -1) {
        $scope[focus] = false;
      } else {
        $scope[focus] = true;
      }
    }
  }

});

app.directive("discountsDirective", function() {
    return {
      restrict: 'EA',
      scope: false,
      controller: "appController",
      templateUrl: "views/discounts.html",
    };
});
app.directive("pricingDirective", function() {
    return {
      restrict: 'EA',
      scope: false,
      controller: "appController",
      templateUrl: "views/pricing.html",
    };
});
app.directive("benefitsDirective", function() {
    return {
      restrict: 'EA',
      scope: {name: '='},
      controller: "appController",
      templateUrl: "views/benefits.html",
    };
});
