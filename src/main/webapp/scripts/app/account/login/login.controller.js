'use strict';

angular.module('sejourApp').controller('LoginController',
		function($rootScope, $scope, $state, $location, $timeout, Auth) {
			$scope.user = {};
			$scope.errors = {};
			
			$scope.autocomplete = function() {
	    		if($scope.userid === '12') {
	    			$scope.userid = "123456789012";
	    		} else if($scope.userid === '23') {
	    			$scope.userid = "234567890123";
	    		}
	        };

			$scope.rememberMe = true;
			$timeout(function() {
				angular.element('[ng-model="username"]').focus();
			});

			 $scope.login = function (event) {
			 event.preventDefault();
			 if ($scope.userid == "123456789012" ){
				 $rootScope.userid = "123456789012";
				 $scope.useridTemp = "kim.soon.jeen@gmail.com";
			 }else if ($scope.userid == "234567890123" ){
				 $rootScope.userid = "234567890123";
				 $scope.useridTemp = "kim.soon.jean@gmail.com";
			 }
			 Auth.login({
				 username: $scope.useridTemp,
				 password: $scope.password,
				 rememberMe: $scope.rememberMe
			 }).then(function () {
			 $scope.authenticationError = false;
			 $rootScope.previousStateName = null;
			 $rootScope.previousStateParams = null;
			 var returnToState = $rootScope.returnToState;
			 var returnToStateParams = $rootScope.returnToStateParams;
			 $rootScope.returnToState = null;
			 $rootScope.returnToStateParams = null;
			 
			 if ($scope.userid === '234567890123'){
				 $state.go('home');
			 }	 
			 else {
				 $state.go('changepwd');
			 }
			                
			 }).catch(function () {
			 $scope.authenticationError = true;
			 });
			 };
		});
