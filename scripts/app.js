var app = angular.module('myApp', []);

app.controller('appController', function($scope) {
  // Global Variables
  $scope.discountAmountMonthly = 0;
  $scope.discountAmountOneTime = 0;
  $scope.currentHome = "";
  $scope.currentPhone = "";
  $scope.newHome = "";
  $scope.newPhone = "";
  $scope.discounts = discountData;;
  $scope.services = servicesData;
  $scope.packages = packageData;
  $scope.autopayShowDiscounts = false;
  $scope.unlmitedShowDiscounts = false;
  $scope.rewardShowDiscounts = false;
  $scope.closerShowDiscounts = false;
  $scope.wirelessShowDiscounts = false;
  $scope.hboShowDiscounts = false;

  // Add/Remove Discounts to totals
  $scope.monthlySavings = function() {
    return $scope.currentHome + $scope.currentPhone - $scope.discountAmountMonthly - $scope.newPhone - $scope.newHome;
  };
  $scope.yearlySavings = function() {
    return ($scope.monthlySavings())*12;
  };

  // Discounts Control, make discouts active.
  $scope.discountFunction = function(discount) {
    discount.active = !discount.active;
    if (discount.amountMonthly) {
      if (discount.active == true) {
        $scope.discountAmountMonthly = $scope.discountAmountMonthly - discount.amountMonthly
      } else {
        $scope.discountAmountMonthly = $scope.discountAmountMonthly + discount.amountMonthly
      }
    } else {
      if (discount.active == true) {
        $scope.discountAmountOneTime = $scope.discountAmountOneTime + discount.amountOneTime
      } else {
        $scope.discountAmountOneTime = $scope.discountAmountOneTime - discount.amountOneTime
      }
    };
  };

  // Select active Service & Discounts
  $scope.serviceSelection = function(service) {
    var discountReset = ['autopay', 'unlimited', 'reward', 'closer', 'wireless', 'hbo'];
    // Resets all discounts to false
    for (var i = 0; i < discountReset.length; i++) {
      $scope.discounts[i].active = false;
    }
    $scope.discountAmountOneTime = 0;
    $scope.discountAmountMonthly = 0;
    // Go through array of available discounts, setting correct active stat
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

// Directive for discounts area
app.directive("discountsDirective", function() {
    return {
      restrict: 'EA',
      scope: false,
      controller: "appController",
      templateUrl: "views/discounts.html",
    };
});

// Directive for pricing area
app.directive("pricingDirective", function() {
    return {
      restrict: 'EA',
      scope: false,
      controller: "appController",
      templateUrl: "views/pricing.html",
    };
});

// Directive for benefits area
app.directive("benefitsDirective", function() {
    return {
      restrict: 'EA',
      scope: {name: '='},
      controller: "appController",
      templateUrl: "views/benefits.html",
    };
});
