'use strict';

angular.module('sejourApp')
    .controller('ConsulatSearchController', function ($rootScope, $scope, $state, $location, $timeout, Auth) {
    	$scope.user = {};
		$scope.errors = {};
		
		$scope.kim = {
				lastname: "Kim",
				firstname: "Soon-Jeen",
				passnumber: "5577997",
				visanumber: "98267382736",
				date: "04/07/2016"
		}
		
		$scope.pham = {
				lastname: "Pham",
				firstname: "Khoa",
				passnumber: "5577998",
				visanumber: "98267382737",
				date: "04/06/2016"
		}
		
		$scope.hui = {
				lastname: "Hui",
				firstname: "Hong",
				passnumber: "5577999",
				visanumber: "98267382738",
				date:"04/08/2016"
		}
		
		$scope.gonzales = {
				lastname: "Gonzales",
				firstname: "Juan",
				passnumber: "5578000",
				visanumber: "98267382739",
				date:"10/08/2016"
		}
		
		$scope.ould = {
				lastname: "Ould",
				firstname: "Moussa",
				passnumber: "5578001",
				visanumber: "98267382740",
				date:"10/08/2016"
		}
		
		
		$scope.listeAttestations = [$scope.kim, $scope.pham, $scope.hui, $scope.gonzales, $scope.ould]

        $scope.rechercher = function (element) {
			if (element == "Kim"){
				$scope.listeAttestations = [$scope.kim];
			}else if (element == "Pham"){
				$scope.listeAttestations = [$scope.pham];
			}else if (element == "Hui"){
				$scope.listeAttestations = [$scope.hui];
			}else if (element == "Gonzales"){
				$scope.listeAttestations = [$scope.gonzales];
			}else if (element == "Ould"){
				$scope.listeAttestations = [$scope.ould];
			}else if (element == ""){
				$scope.listeAttestations = [$scope.kim, $scope.pham, $scope.hui, $scope.gonzales, $scope.ould];
			}else{
				$scope.listeAttestations = [];
				alert("Aucun résultat n'a été trouvé !");
			}
        };
        
        $scope.consulter = function(attestation) {
            window.open("Attestation_" + attestation.lastname + ".pdf");
        };
        
    });
