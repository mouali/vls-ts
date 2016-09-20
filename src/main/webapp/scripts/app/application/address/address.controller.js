'use strict';

angular.module('sejourApp').controller('AddressController',
		function($rootScope, $scope, $state, $location, $timeout, Auth) {
			$scope.user = {};
			$scope.errors = {};
			
			$scope.address = {
					phone: "+33 677889900",
					number: "43",
					email: "kim.soon.jeen@gmail.com",
					street: "avenue de la Joie",
					postalCode: "75014",
					city: "Paris"
			}

			 
			$scope.save = function () {
				$state.go('payment');
		    };
		    
		    $scope.cancel = function () {
				$state.go('identity');
	    };
});
