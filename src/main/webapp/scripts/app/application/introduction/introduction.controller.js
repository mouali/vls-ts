'use strict';

angular.module('sejourApp').controller('IntroductionController',
		function($rootScope, $scope, $state, $location, $timeout, Auth) {
			$scope.user = {};
			$scope.errors = {};
				 
			$scope.start = function () {
					$state.go('start');
		    };
});
