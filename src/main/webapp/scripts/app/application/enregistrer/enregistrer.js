'use strict';

angular.module('sejourApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('enregistrer', {
                parent: 'site',
                url: '/Enregistrement',
                data: {
                    roles: ['ROLE_USAGER']
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/application/enregistrer/enregistrer.html',
                        controller: 'EnregistrerController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('enregistrer');
                        return $translate.refresh();
                    }]
                }
            });
    });
