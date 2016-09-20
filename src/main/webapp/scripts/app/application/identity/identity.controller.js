'use strict';

angular.module('sejourApp').controller('IdentityController',
		function($rootScope, $scope, $state, $location, $timeout, Auth) {
			$scope.user = {};
			$scope.errors = {};
			
			$scope.identity = {
					lastname: "KIM",
					firstName: "Soon-Jeen",
					sexe: "Feminin",
					birthDate: "10/12/1992",
					birthCity: "Séoul",
					birthCountry: "Corée du Sud",
					nationality: "Coréenne",
					passportNumber: "5577947",
					maritalStatus: "Célibataire"
			}

			$scope.save = function () {
					$state.go('address');
		    };
		    
		    $scope.cancel = function () {
				$state.go('start');
	    };
});
