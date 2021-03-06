'use strict';

angular.module('sejourApp')
    .factory('Application', function ($http) {
        return {
            create: function (type, nature) {
            	var formData = new FormData();
		        formData.append('type', type);
		        formData.append('nature', nature);
		        var params = { headers: {'Content-Type': undefined} }
            	return $http.post('api/application', formData, params).then(function (response) {
                    return response.data;
                });
            },
            delete: function (objectId) {
            	return $http.delete('api/application/' + objectId).then(function (response) {
                    return response.data;
                });
            },
	        get: function (objectId) {
	        	var id = objectId ? '/' + objectId.id : '';
	        	return $http.get('api/application' + id).then(function (response) {
	                return response.data;
	            });
	        },
            getByStatus: function (status, email) {
            	return $http.get('api/application/statut', {params: {status: status, email: email}}).then(function (response) {
                    return response.data;
                });
            },
            getHistory: function (email) {
            	return $http.get('api/application/history', {params: {email: email}}).then(function (response) {
                    return response.data;
                });
            },
            getApplicationsForPermitReceipt: function () {
            	return $http.get('api/application/receipt').then(function (response) {
                    return response.data;
                });
            },
            getApplicationsForPermitIssuing: function () {
            	return $http.get('api/application/issuing').then(function (response) {
                    return response.data;
                });
            },
            getApplicationsForFollow: function () {
            	return $http.get('api/application/follow').then(function (response) {
                    return response.data;
                });
            },
            getApplicationsToReconstruct: function () {
            	return $http.get('api/application/reconstruct').then(function (response) {
                    return response.data;
                });
            },
        	count: function() {
            	return $http.get('api/application/count').then(function (response) {
                    return response.data;
                });
        	},
	        update: function (application) {
        		return $http.put('api/application', application).then(function (response) {
                    return response.data;
                });
	        },
	        pay: function (id) {
        		return $http.put('api/application/pay', id).then(function (response) {
                    return response.data;
                });
	        },
            admissibility: function (id) {
            	return $http.put('api/application/admissibility', id).then(function (response) {
                    return response.data;
                });
            },
            schedule: function (application) {
            	return $http.put('api/application/rdv', application).then(function (response) {
                    return response.data;
                });
            },
            identify: function (id, step) {
            	return $http.put('api/application/identification/' + step, id).then(function (response) {
                    return response.data;
                });
            },
            interview: function (id, report) {
            	var formData = new FormData();
		        formData.append('id', id);
		        formData.append('report', report);
		        var params = { headers: {'Content-Type': undefined} }
            	return $http.post('api/application/interview', formData, params).then(function (response) {
                    return response.data;
                });
            },
            validate: function (id) {
            	return $http.put('api/application/validation', id).then(function (response) {
                    return response.data;
                });
            },
            receipt: function (ids) {
            	return $http.put('api/application/receipt', ids).then(function (response) {
                    return response.data;
                });
            },
            issuing: function (id) {
            	return $http.put('api/application/issuing', id).then(function (response) {
                    return response.data;
                });
            },
            reconstruct: function (id) {
            	return $http.put('api/application/reconstruct', id).then(function (response) {
                    return response.data;
                });
            }
        };
    });
