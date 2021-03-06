var app = angular.module('myApp', ['rzModule', 'uiSwitch']);

// app.run(['stepsForm'])

app.controller('appController', function($scope) {
  // Global Variables
  $scope.discountAmountMonthly = 0;
  $scope.discountAmountOneTime = 0;
  $scope.discountAmountFirstYear = 0;
  $scope.discountInternetMonthly = 0;
  $scope.discountInternetFirstYear = 0;
  $scope.homeBaseAmount = 0;
  $scope.costOfAdditionalTvs = 0;
  $scope.internetCost = 0;
  $scope.homePhoneCost = 0;
  $scope.currentHome = "";
  $scope.currentPhone = "";
  // $scope.newHome = $scope.homeBaseAmount - $scope.discountAmountMonthly;
  $scope.newPhone = "";
  $scope.discounts = discountData;;
  $scope.services = servicesData;
  $scope.packages = packageData;
  $scope.internetOptions = internetData;
  $scope.autopayShowDiscounts = true;
  $scope.unlimitedShowDiscounts = true;
  $scope.rewardShowDiscounts = true;
  $scope.closerShowDiscounts = true;
  $scope.unifiedShowDiscounts = true;
  $scope.wirelessShowDiscounts = true;
  $scope.hboShowDiscounts = true;
  $scope.pricingSection = false;
  $scope.packagesAvailable = [];
  $scope.packageQuantity = "";
  $scope.tvShow = false;
  $scope.tvSelected = false;
  $scope.internetSelected = false;
  // $scope.adjustPricing = false;
  $scope.toggle = {};
  $scope.toggle.switch = false;

  $scope.applyInternetDiscount = function() {
    $scope.discountInternetMonthly = 0;
    $scope.discountInternetFirstYear = 0;
    var unifiedLocation = 3;
    if ($scope.discounts[unifiedLocation].active) {
      $scope.discountInternetMonthly = 20;
    } else if ($scope.internetSelected) {
      $scope.discountInternetFirstYear = 10;
    }
  };

  $scope.internetSelectionFunction = function(option) {
    option.active = !option.active;
    if (option.active == true) {
      if (option.type == 'phone') {
        $scope.homePhoneCost = option.price;
      } else {
        $scope.internetSelected = true;
        $scope.internetCost = option.price;
      }
    } else {
      if (option.type == 'phone') {
        $scope.homePhoneCost = 0;
      } else {
        $scope.internetCost = 0;
        $scope.internetSelected = false;
      }
    }
    $scope.applyInternetDiscount();
    $scope.unifiedTestFunction();
  };

  $scope.unifiedTestFunction = function() {
    console.log('Test Ran');
    console.log($scope.internetSelected);
    console.log($scope.tvSelected);
    if ($scope.internetSelected & $scope.tvSelected) {
      console.log('True if ran');
      $scope.unifiedShowDiscounts = true;
    } else {
      console.log('Else ran');
      $scope.unifiedShowDiscounts = false;
    }
    $scope.apply();
  };

  $scope.numberOfTvSlider = {
    value: 1,
    options: {
      floor: 1,
      ceil: 8,
      showTicksValues: true,
    }
  };

  $scope.currentPhone = {
        value: 100,
        options: {
            ceil: 400,
            floor: 100,
            step: 5,
            translate: function (value) {
                return '$' + value;
            }
        }
    };

  $scope.packagePricingFunction = function(selection) {
    for (var i = 0; i < $scope.packages.length; i++) {
      if ($scope.packages[i].active == true) {
        $scope.newHome -= $scope.packages[i].amount;
        $scope.packages[i].active = false;
      };
    };
    $scope.homeBaseAmount = selection.amount;
    selection.active = true;
    // $scope.newHome = $scope.homeBaseAmount;
  };

  // Add/Remove Discounts to totals
  $scope.monthlySavings = function() {
    return $scope.currentHome + $scope.currentPhone.value - $scope.discountAmountMonthly - $scope.newPhone - $scope.newHome;
  };
  $scope.yearlySavings = function() {
    return ($scope.monthlySavings())*12;
  };

  // Discounts Control, make discounts active.
  $scope.discountFunction = function(discount) {
    discount.active = !discount.active;
    if (discount.amountMonthly) {
      if (discount.active == true) {
        $scope.discountAmountMonthly = $scope.discountAmountMonthly + discount.amountMonthly;
      } else {
        $scope.discountAmountMonthly = $scope.discountAmountMonthly - discount.amountMonthly;
      }
    } else {
      if (discount.active == true) {
        $scope.discountAmountOneTime = $scope.discountAmountOneTime - discount.amountOneTime
      } else {
        $scope.discountAmountOneTime = $scope.discountAmountOneTime + discount.amountOneTime
      }
    };
    $scope.applyInternetDiscount();
  };

  // Select active Service & Discounts
  $scope.serviceSelection = function(service) {
    var discountReset = [];
    for (var i = 0; i < $scope.discounts.length; i++) {
      discountReset.push($scope.discounts[i].abbr)
    }
    // var discountReset = ['autopay', 'unlimited', 'reward', 'unified', 'wireless', 'hbo'];
    // Resets all discounts to false
    for (var i = 0; i < discountReset.length; i++) {
      $scope.discounts[i].active = false;
    }
    $scope.discountAmountOneTime = 0;
    $scope.discountAmountMonthly = 0;
    $scope.homeBaseAmount = 0;
    $scope.newHome = 0;
    $scope.costOfAdditionalTvs = service.tv;
    // Go through array of available discounts, setting correct active stat
    for (var i = 0; i < discountReset.length; i++) {
      var focus = discountReset[i] + 'ShowDiscounts';
      var test = service.discounts.indexOf(discountReset[i]);
      if (test == -1) {
        $scope[focus] = true;
      } else {
        $scope[focus] = false;
      }
    }
    if (service.name == 'DTV NOW') {
      $scope.tvShow = false;
    } else {
      $scope.tvShow = true;
    }
    $scope.tvSelected = !$scope.tvSelected;
    $scope.applyInternetDiscount();
    $scope.unifiedTestFunction();
  };

  $scope.packageSelection = function(service) {
    $scope.packagesAvailable = [];
    for (var i = 0; i < service.packages.length; i++) {
      for (var p = 0; p < $scope.packages.length; p++) {
        if (service.packages[i] == $scope.packages[p].abbr) {
          $scope.packagesAvailable.push($scope.packages[p])
        }
      }
    }
    if ($scope.packagesAvailable.length == 6) {
      $scope.packageQuantity = 'large-group'
    } else {
      $scope.packageQuantity = 'small-group'
    }
  };




  // Single Line Input Form Control
  ;( function( window ) {

  	'use strict';

  	var transEndEventNames = {
  			'WebkitTransition': 'webkitTransitionEnd',
  			'MozTransition': 'transitionend',
  			'OTransition': 'oTransitionEnd',
  			'msTransition': 'MSTransitionEnd',
  			'transition': 'transitionend'
  		},
  		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
  		support = { transitions : Modernizr.csstransitions };

  	function extend( a, b ) {
  		for( var key in b ) {
  			if( b.hasOwnProperty( key ) ) {
  				a[key] = b[key];
  			}
  		}
  		return a;
  	}

  	function stepsForm( el, options ) {
  		this.el = el;
  		this.options = extend( {}, this.options );
    		extend( this.options, options );
    		this._init();
  	}

  	stepsForm.prototype.options = {
  		onSubmit : function() { return false; }
  	};

  	stepsForm.prototype._init = function() {
  		// current question
  		this.current = 0;

  		// questions
  		this.questions = [].slice.call( this.el.querySelectorAll( 'ol.questions > li' ) );
  		// total questions
  		this.questionsCount = this.questions.length;
  		// show first question
  		classie.addClass( this.questions[0], 'current' );

  		// next question control
  		this.ctrlNext = this.el.querySelector( 'button.next' );

  		// progress bar
  		this.progress = this.el.querySelector( 'div.progress' );

  		// question number status
  		this.questionStatus = this.el.querySelector( 'span.number' );
  		// current question placeholder
  		this.currentNum = this.questionStatus.querySelector( 'span.number-current' );
  		this.currentNum.innerHTML = Number( this.current + 1 );
  		// total questions placeholder
  		this.totalQuestionNum = this.questionStatus.querySelector( 'span.number-total' );
  		this.totalQuestionNum.innerHTML = this.questionsCount;

  		// error message
  		this.error = this.el.querySelector( 'span.error-message' );

  		// init events
  		this._initEvents();
  	};

  	stepsForm.prototype._initEvents = function() {
  		var self = this,
  			// first input
  			firstElInput = this.questions[ this.current ].querySelector( 'input' ),
  			// focus
  			onFocusStartFn = function() {
  				firstElInput.removeEventListener( 'focus', onFocusStartFn );
  				classie.addClass( self.ctrlNext, 'show' );
  			};

  		// show the next question control first time the input gets focused
  		firstElInput.addEventListener( 'focus', onFocusStartFn );

  		// show next question
  		this.ctrlNext.addEventListener( 'click', function( ev ) {
  			ev.preventDefault();
  			self._nextQuestion();
  		} );

  		// pressing enter will jump to next question
  		document.addEventListener( 'keydown', function( ev ) {
  			var keyCode = ev.keyCode || ev.which;
  			// enter
  			if( keyCode === 13 ) {
  				ev.preventDefault();
  				self._nextQuestion();
  			}
  		} );

  		// disable tab
  		this.el.addEventListener( 'keydown', function( ev ) {
  			var keyCode = ev.keyCode || ev.which;
  			// tab
  			if( keyCode === 9 ) {
  				ev.preventDefault();
  			}
  		} );
  	};

  	stepsForm.prototype._nextQuestion = function() {
  		if( !this._validade() ) {
  			return false;
  		}

  		// check if form is filled
  		if( this.current === this.questionsCount - 1 ) {
  			this.isFilled = true;
  		}

  		// clear any previous error messages
  		this._clearError();

  		// current question
  		var currentQuestion = this.questions[ this.current ];

  		// increment current question iterator
  		++this.current;

  		// update progress bar
  		this._progress();

  		if( !this.isFilled ) {
  			// change the current question number/status
  			this._updateQuestionNumber();

  			// add class "show-next" to form element (start animations)
  			classie.addClass( this.el, 'show-next' );

  			// remove class "current" from current question and add it to the next one
  			// current question
  			var nextQuestion = this.questions[ this.current ];
  			classie.removeClass( currentQuestion, 'current' );
  			classie.addClass( nextQuestion, 'current' );
  		}

  		// after animation ends, remove class "show-next" from form element and change current question placeholder
  		var self = this,
  			onEndTransitionFn = function( ev ) {
  				if( support.transitions ) {
  					this.removeEventListener( transEndEventName, onEndTransitionFn );
  				}
  				if( self.isFilled ) {
  					self._submit();
  				}
  				else {
  					classie.removeClass( self.el, 'show-next' );
  					self.currentNum.innerHTML = self.nextQuestionNum.innerHTML;
  					self.questionStatus.removeChild( self.nextQuestionNum );
  					// force the focus on the next input
  					nextQuestion.querySelector( 'input' ).focus();
  				}
  			};

  		if( support.transitions ) {
  			this.progress.addEventListener( transEndEventName, onEndTransitionFn );
  		}
  		else {
  			onEndTransitionFn();
  		}
  	}

  	// updates the progress bar by setting its width
  	stepsForm.prototype._progress = function() {
  		this.progress.style.width = this.current * ( 100 / this.questionsCount ) + '%';
  	}

  	// changes the current question number
  	stepsForm.prototype._updateQuestionNumber = function() {
  		// first, create next question number placeholder
  		this.nextQuestionNum = document.createElement( 'span' );
  		this.nextQuestionNum.className = 'number-next';
  		this.nextQuestionNum.innerHTML = Number( this.current + 1 );
  		// insert it in the DOM
  		this.questionStatus.appendChild( this.nextQuestionNum );
  	}

  	// submits the form
  	stepsForm.prototype._submit = function() {
  		this.options.onSubmit( this.el );
  	}

  	// TODO (next version..)
  	// the validation function
  	stepsForm.prototype._validade = function() {
  		// current question´s input
  		var input = this.questions[ this.current ].querySelector( 'input' ).value;
  		if( input === '' ) {
  			this._showError( 'EMPTYSTR' );
  			return false;
  		}

  		return true;
  	}

  	// TODO (next version..)
  	stepsForm.prototype._showError = function( err ) {
  		var message = '';
  		switch( err ) {
  			case 'EMPTYSTR' :
  				message = 'Please fill the field before continuing';
  				break;
  			case 'INVALIDEMAIL' :
  				message = 'Please fill a valid email address';
  				break;
  			// ...
  		};
  		this.error.innerHTML = message;
  		classie.addClass( this.error, 'show' );
  	}

  	// clears/hides the current error message
  	stepsForm.prototype._clearError = function() {
  		classie.removeClass( this.error, 'show' );
  	}

  	// add to global namespace
  	window.stepsForm = stepsForm;

  })( window );

  var theForm = document.getElementById( 'theForm' );
  new stepsForm( theForm, {
    onSubmit : function( form ) {
      // $scope.adjustPricingFunction();
      // hide form
      classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );
      // let's just simulate something...
      var messageEl = theForm.querySelector( '.final-message' );
      // messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
      classie.addClass( messageEl, 'show' );
      // setTimeout(function(){ $scope.$apply(); }, 500);

      }
    });
});

/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

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

// Directive for pricing area
app.directive("compareDirective", function() {
    return {
      restrict: 'EA',
      scope: false,
      controller: "appController",
      templateUrl: "views/compare.html",
    };
});

// Directive for benefits area
app.directive("benefitsDirective", function() {
    return {
      restrict: 'EA',
      scope: false,
      controller: "appController",
      templateUrl: "views/benefits.html",
    };
});

// Directive for benefits area
app.directive("sidenavDirective", function() {
    return {
      restrict: 'EA',
      scope: false,
      controller: "appController",
      templateUrl: "views/sidenav.html",
    };
});
