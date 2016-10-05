'use strict';

angular.module('sejourApp').controller('ChangepwdController',
		function($rootScope, $scope, $state, $location, $timeout, Auth) {
			$scope.user = {};
			$scope.errors = {};

			$scope.autocomplete = function() {
	    		if($scope.visaid === "F") {
	    			$scope.visaid = "F50620070";
	    		}
	        };
			 
			$scope.save = function () {
				if ($scope.oldpassword == "sief2" && $scope.visaid == "F50620070" 
					&& $scope.newpassword == $scope.newpasswordconfirmation){
					
					$state.go('home');
					
				}
				else{
					if ($scope.oldpassword !== "sief2" || $scope.visaid !== "F50620070"){
					$scope.authenticationError = true;
					$scope.oldpassword = '';
					$scope.newpassword = '';
					$scope.newpasswordconfirmation = '';
					}else{
						$scope.authenticationError = true;
						$scope.newpassword = '';
						$scope.newpasswordconfirmation = '';
					}
				}
		    };
});
