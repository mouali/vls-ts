'use strict';

angular.module('sejourApp')
    .controller('DocumentController', function ($rootScope, $scope, $state, $location, $timeout, Auth) {
    	$scope.user = {};
		$scope.errors = {};
		
		$scope.isConfirmation = 'true';
        
        $scope.terminer = function () {
        	$state.go('enregistrer');
        };
        
    });
