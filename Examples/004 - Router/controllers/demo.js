angular.module('app').controller("DemoController", DemoController);

function DemoController($scope, $routeParams) {
	
	var self = this;
	
	console.log('Demo controller started');

	// if(typeof $routeParams.name !== 'undefined') {
	
		$scope.message = 'We don\'t have a color "' + $routeParams.name +'"';
	
	// } else {
	
		// $scope.message = 'Color not recognized!!';
	
	// }

}