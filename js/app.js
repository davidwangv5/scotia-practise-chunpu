'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])

.controller('MasterCtrl', ['$scope', function ($scope){
	$scope.MonthTable=[
		{
			text: 'Gross Income',
			value: 1
		},
		{
			text: 'Property Taxes',
			value: 1
		},
		{
			text: ' Condominium Fees',
			value: 1
		},
		{
			text: ' Heating Costs',
			value: 1
		},
		{
			text: 'Borrowing Payments (e.g. credit cards, loans)',
			value: 2
		}
	];

	$scope.MortgageTable=[
		{
			text: 'Product',
			value: 1
		},
		{
			text: 'Interest Rate',
			value: 1,
			unit: '%'
		},
		{
			text: 'Amortization',
			value: 2,
			unit:'Yrs'
		}
	];

	$scope.ResultTable=[
		{
			text: ' A minimum down payment of:',
			value: '$13,9.86'

		},
		{
			text: 'A monthly payment of:',
			value: '$1,600.00'
		},
		{
			text: 'A total mortgage amount of:',
			value: '$275,1.00'
		}
	];

}]);

angular.module('myApp')
.directive('ngSliderOne', [function() {
  return {
    restrict: 'A',
    scope: {
      'model': '='
    },
    link: function(scope, elem, attrs) {
      var $slider = $(elem);
      $slider.slider({
        min: 0,
        max: 5,
        step:1,
        value: +scope.model,
        slide: function(event, ui) {
          scope.$apply(function() {
            scope.model = ui.value;
          });
        }
      });
    }
  };
}]);
