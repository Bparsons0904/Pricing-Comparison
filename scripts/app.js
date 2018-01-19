var app = angular.module('myApp', []);
var discountMonthly = 0;

app.controller('appController', function($scope) {
  $scope.discountAmountMonthly = 0;
  $scope.discountAmountOneTime = 0;
  // $scope.activeDiscount = [];
  // $scope.totalDiscount = function() {
  //   console.log($scope.activeDiscount);
  //   for (discount in $scope.discounts) {
  //     console.log(discount);
  //   }
  // };
  $scope.currentHome = "";
  $scope.currentPhone = "";
  $scope.newHome = 555;
  $scope.newPhone = "";
  $scope.monthlySavings = function() {
    return $scope.currentHome + $scope.currentPhone - $scope.discountAmountMonthly - $scope.newPhone - $scope.newHome;
  };
  $scope.yearlySavings = function() {
    return ($scope.monthlySavings())*12;
  };
  $scope.discounts = discountData;
  $scope.services = servicesData;
  $scope.packages = packageData;
  $scope.discountFunction = function(discount) {
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




    // if (discount.active == true) {
    //   if (discount.discountAmountMonthly >= 0) {
      //   $scope.discountAmountMonthly = $scope.discountAmountMonthly + discount.amountMonthly
      // } else {
      //   $scope.discountAmountMonthly = $scope.discountAmountMonthly - discount.amountMonthly
      // }
    // } else {
    //   console.log("If Failed");
    // }


    // $scope.monthlySavings();
    // if (discount.active == true) {
    //   $scope.discountAmount = $scope.discountAmount + discount.amount
    // } else {
    //   $scope.discountAmount = $scope.discountAmount - discount.amount
    // }
    // $scope.monthlySavings();
    // $scope.activeDiscount[discountName] = amount;
    // console.log($scope.activeDiscount);
    // $scope.totalDiscount();
    // $scope.totalDiscount = $scope.totalDiscount + amount;
    // console.log($scope.totalDiscount);

  };
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
