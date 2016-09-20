'use strict';

angular.module('sejourApp').controller('LoginController',
		function($rootScope, $scope, $state, $location, $timeout, Auth) {
			$scope.user = {};
			$scope.errors = {};

			$scope.rememberMe = true;
			$timeout(function() {
				angular.element('[ng-model="username"]').focus();
			});

			 $scope.login = function (event) {
			 event.preventDefault();
			 if ($scope.userid == "123456789012" ){
				 $scope.useridTemp = "kim.soon.jeen@gmail.com";
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
			 
			 if ($scope.userid === 'kim.soon.jean@gmail.com'){
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
