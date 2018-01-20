var discountData = [{
    name: 'TV Autopay',
    amountMonthly: 5,
    dtv: true,
    uverse: true,
    now: false
  }, {
    name: 'Unlimited',
    amountMonthly: 15
  }, {
    name: 'Reward Card',
    amountOneTime: 200
  }, {
    name: 'Closer Coupon',
    amountOneTime: 100
  }, {
    name: 'Wireless Credit',
    amountMonthly: 10
  }, {
    name: 'Free HBO',
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
  discounts: ['TV Autopay', 'Unlimited', 'Reward Card', 'Closer Coupon', 'Wireless Credit', 'Free HBO']
}, {
  name: 'Uverse',
  discounts: ['TV Autopay', 'Unlimited', 'Reward Card', 'Wireless Credit', 'Free HBO']
}, {
  name: 'DTV NOW',
  discounts: ['Unlimited', 'Free HBO']
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
