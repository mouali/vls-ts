'use strict';

angular.module('sejourApp').controller('StartController',
		function($rootScope, $scope, $state, $location, $timeout, Auth) {
			$scope.user = {};
			$scope.errors = {};
			
			$scope.visaid = "F50620070";
			$scope.motif = "Etudiant";
			calculerDate();
			
			function calculerDate () {
				var ladate = new Date();
				
				var jour = new String (ladate.getDate());
				if (jour.length === 1){
					var jour = '0' + jour;
				}
				
				var mois = new String (ladate.getMonth());
				if (mois.length === 1){
					var mois = '0' + mois;
				}
				
				var annee = ladate.getFullYear();
				
				$scope.dateDebutValidite = jour + "/" + mois + "/" + annee; 
				$scope.datefinValidite = jour + "/" + mois + "/" + (annee+1);
				
				$scope.dateMin = (annee-1) +"-"+ mois +"-"+ jour;
				$scope.dateMax = annee + "-"+ mois + "-" + jour;
		    };

			 
			$scope.save = function () {
				$state.go('identity');
		    };
		    
		    $scope.cancel = function () {
				$state.go('introduction');
	    };
});
