var discountData = [{
    name: 'TV Autopay',
    abbr: 'autopay',
    amountMonthly: 5,
  }, {
    name: 'Unlimited',
    abbr: 'unlimited',
    amountMonthly: 15
  }, {
    name: 'Reward Card',
    abbr: 'reward',
    amountOneTime: 200
  }, {
    name: 'Closer Coupon',
    abbr: 'closer',
    amountOneTime: 100
  }, {
    name: 'Wireless Credit',
    abbr: 'wireless',
    amountMonthly: 10
  }, {
    name: 'Free HBO',
    abbr: 'hbo',
    amountMonthly: 18
  }];

// var servicesData = [{
//     name: 'DirecTV',
//     packages: [{
//         name: 'Select',
//         amount: 50,
//         discount: 25
//       }, {
//         name: 'Choice',
//         amount: 75,
//         discount: 25
//       }]
//   }, {
//     name: 'uVerse'
//   }, {
//     name: 'Internet'
//   }, {
//     name: 'DTV NOW'
//   }];

var packageData = [{
    name: 'Select',
    amount: 50,
    discount: 25
  }, {
    name: 'Choice',
    amount: 75,
    discount: 25
  }];

var servicesData = [{
  name: 'DirecTV',
  discounts: ['autopay', 'unlimited', 'reward', 'closer', 'wireless', 'hbo']
}, {
  name: 'Uverse',
  discounts: ['autopay', 'unlimited', 'reward', 'wireless', 'hbo']
}, {
  name: 'DTV NOW',
  discounts: ['unlimited', 'hbo']
}];

// var servicesData = [
//   {
//     name: 'DirecTV',
//     pagckage: {
//       name: 'Select',
//       monthly: 50,
//       discount: 25
//     }, {
//       name: 'Choice',
//       monthly: 75,
//       discount: 25
//     }
//     name: 'uVerse',
//     pagckage: {
//       name: 'Family',
//       monthly: 50,
//       discount: 25
//     }, {
//       name: 'U200',
//       monthly: 75,
//       discount: 25
//     }
//   }
// ]