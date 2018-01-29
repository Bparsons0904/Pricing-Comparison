var discountData = [{
    name: 'TV Autopay',
    abbr: 'autopay',
    amountMonthly: 5,
    active: false
  }, {
    name: 'Unlimited',
    abbr: 'unlimited',
    amountMonthly: 15,
    active: false
  }, {
    name: 'Reward Card',
    abbr: 'reward',
    amountOneTime: 200,
    active: false
  }, {
    name: 'Closer Coupon',
    abbr: 'closer',
    amountOneTime: 100,
    active: false
  }, {
    name: 'Wireless Credit',
    abbr: 'wireless',
    amountMonthly: 10,
    active: false
  }, {
    name: 'Free HBO',
    abbr: 'hbo',
    amountMonthly: 18,
    active: false
  }];

var internetData = [{
    name: 'Upto 50 Mb',
    price: 50,
    discount: 10
  }, {
    name: 'Upto 200 Mb',
    price: 70,
    discount: 10
  }, {
    name: 'Upto 1 Gb',
    price: 90,
    discount: 10
  }, {
    name: 'Phone 200',
    price: 20,
    discount: 0,
    type: 'phone'
  }, {
    name: 'Unlimited',
    price: 35,
    discount: 0,
    type: 'phone'
  }];

var packageData = [{
    name: 'Select',
    abbr: 'select',
    amount: 50,
    discount: 25
  }, {
    name: 'Entertianment',
    abbr: 'entertainment',
    amount: 2,
    discount: 25
  }, {
    name: 'Choice',
    abbr: 'choice',
    amount: 3,
    discount: 25
  }, {
    name: 'Xtra',
    abbr: 'xtra',
    amount: 4,
    discount: 25
  }, {
    name: 'Ultimate',
    abbr: 'ultimate',
    amount: 5,
    discount: 25
  }, {
    name: 'Premier',
    abbr: 'premier',
    amount: 6,
    discount: 25
  }, {
    name: 'U-family',
    abbr: 'ufamily',
    amount: 7,
    discount: 25
  }, {
    name: 'U200',
    abbr: 'u200',
    amount: 8,
    discount: 25
  }, {
    name: 'U300',
    abbr: 'u300',
    amount: 9,
    discount: 25
  }, {
    name: 'U450',
    abbr: 'u450',
    amount: 10,
    discount: 25
  }, {
    name: 'Live a Little',
    abbr: 'little',
    amount: 11,
    discount: 25
  }, {
    name: 'Just Right',
    abbr: 'right',
    amount: 12,
    discount: 25
  }, {
    name: 'Go Big',
    abbr: 'big',
    amount: 13,
    discount: 25
  }, {
    name: 'Gotta Have It',
    abbr: 'gotta',
    amount: 14,
    discount: 25
  }];

var servicesData = [{
  name: 'DirecTV',
  discounts: ['autopay', 'unlimited', 'reward', 'closer', 'wireless', 'hbo'],
  packages: ['select', 'entertainment', 'choice', 'xtra', 'ultimate', 'premier'],
  tv: 7,
}, {
  name: 'Uverse',
  discounts: ['autopay', 'unlimited', 'reward', 'wireless', 'hbo'],
  packages: ['ufamily', 'u200', 'u300', 'u450'],
  tv: 10,
}, {
  name: 'DTV NOW',
  discounts: ['unlimited', 'hbo'],
  packages: ['little', 'right', 'big', 'gotta'],
  tv: false,
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
