(function () {

	angular
		.module('app')
		.directive('addTuit', addTuitDirective);


	function addTuitDirective(tuitService, sessionService) {

		return {
			restrict: 'E',
			link: {
				pre: function(scope, element, attrs) {
					// Pre Link
                    scope.add = tuitService.add;
                    scope.session = sessionService;
				},
				post: function(scope, element, attrs) {
					// Post Link
				}
			},
			templateUrl: 'views/add-tuit.html'
		};

	}

})();