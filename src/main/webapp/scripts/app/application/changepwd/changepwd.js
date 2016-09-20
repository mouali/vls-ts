'use strict';

angular.module('sejourApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('changepwd', {
                parent: 'site',
                url: '/changepwd',
                data: {
                    roles: ['ROLE_USAGER']
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/application/changepwd/changepwd.html',
                        controller: 'ChangepwdController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('changepwd');
                        return $translate.refresh();
                    }]
                }
            });
    });
