(function () {

	angular
		.module('app')
		.directive('task', taskDirective);


	function taskDirective() {

		return {
			restrict: 'E',
			scope: {
				task: '=',
				Todo: '='
			},
			link: {
				pre: function(scope, element, attrs) {
					// Pre Link
				},
				post: function(scope, element, attrs) {
					// Post Link
				}
			},
			templateUrl: 'views/task.html'
		};

	}

})();