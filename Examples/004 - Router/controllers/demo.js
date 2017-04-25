angular.module('app').controller("DemoController", DemoController);

function DemoController($scope) {
	
	var self = this;
	
	console.log('Demo controller started');

	$scope.message = 'Color not recognized!!';
}