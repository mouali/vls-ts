'use strict';

angular.module('sejourApp')
    .controller('RenouvelerAddressController', function ($scope, $state, Principal, Demande, Country) {
        $scope.address = {};
        $scope.countries = [];

        $scope.loadAll = function () {
            Demande.getInProgressDemande($scope.account.email).then(function(result) {
            	$scope.demande = result;
                $scope.address = result.address;
            });
            
            Country.get().then(function(result) {
            	$scope.countries = result;
            });
        };
        
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.loadAll();
        });
        
        $scope.save = function () {
        	console.log($scope.demande);
            Demande.update($scope.demande, false).then(function(result){
            	$state.go('renouveler/project');
            });
        };
        
    });