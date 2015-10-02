'use strict';

angular.module('sejourApp')
    .factory('Demande', function ($http) {
        return {
            init: function () {
            	return $http.put('api/demande/init').then(function (response) {
                    return response.data;
                });
            },
        	getCount: function() {
            	return $http.get('api/demandes/count').then(function (response) {
                    return response.data;
                });
        	},
        	getCurrentCount: function() {
            	return $http.get('api/demandes/currentCount').then(function (response) {
                    return response.data;
                });
        	},
            getAll: function () {
            	return $http.get('api/demandes').then(function (response) {
                    return response.data;
                });
            },
            get: function (objectId) {
            	return $http.get('api/demande/' + objectId.id).then(function (response) {
                    return response.data;
                });
            },
            getInProgressDemande: function (email) {
            	return $http.get('api/demande', {params: {email: email, statut: "draft"}}).then(function (response) {
                    return response.data;
                });
            },
            update: function (demande, finalStep) {
            	if(finalStep){
            		return $http.put('api/demande/validate', demande).then(function (response) {
                        return response.data;
                    });
            	} else {
	            	return $http.put('api/demande/update', demande).then(function (response) {
	                    return response.data;
	                });
            	}
            },
            prepaid: function () {
            	return $http.put('api/demande/prepaid').then(function (response) {
                    return response.data;
                });
            },
            getRecevableDemande: function (id) {
            	return $http.get('api/demande/statut', {params: {statut: "recevability"}}).then(function (response) {
                    return response.data;
                });
            },
            verify: function (demande) {
            	return $http.put('api/demande/verify', demande).then(function (response) {
                    return response.data;
                });
            },
            getDemandeForRdv: function (email) {
            	return $http.get('api/demande', {params: {email: email, statut: "rdv"}}).then(function (response) {
                    return response.data;
                });
            },
            rdv: function (demande) {
            	return $http.put('api/demande/rdv', demande).then(function (response) {
                    return response.data;
                });
            },
            getIdentificableDemande: function (id) {
            	return $http.get('api/demande/statut', {params: {statut: "identification"}}).then(function (response) {
                    return response.data;
                });
            },
            identifyDocuments: function (demande) {
            	return $http.put('api/demande/identification/documents', demande).then(function (response) {
                    return response.data;
                });
            },
            identifyBiometrics: function (demande) {
            	return $http.put('api/demande/identification/biometrics', demande).then(function (response) {
                    return response.data;
                });
            },
            getValidableDemande: function (id) {
            	return $http.get('api/demande/statut', {params: {statut: "decision"}}).then(function (response) {
                    return response.data;
                });
            },
            finalDecision: function (demande) {
            	return $http.put('api/demande/finalDecision', demande).then(function (response) {
                    return response.data;
                });
            },
            remove: function (objectId) {
            	return $http.delete('api/demande/' + objectId).then(function (response) {
                    return response.data;
                });
            }
        };
    });
