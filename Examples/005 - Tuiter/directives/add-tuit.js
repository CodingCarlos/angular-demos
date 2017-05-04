(function () {

	angular
		.module('app')
		.directive('addTuit', addTuitDirective);


	function addTuitDirective(tuit, session) {

		return {
			restrict: 'E',
			link: {
				pre: function(scope, element, attrs) {
					// Pre Link
                    scope.add = function(text) {
                    	tuit.add(session.name, text);	
                    };
				}
			},
			templateUrl: 'views/add-tuit.html'
		};

	}

})();