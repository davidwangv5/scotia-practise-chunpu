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
			value: 1
		},
		{
			text: 'Amortization',
			value: 2
		}
	];

}])
