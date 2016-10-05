'use strict';

angular.module('sejourApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('consulatmain', {
                parent: 'site',
                url: '/consulat/main',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/application/consulat/consulatmain/consulatmain.html',
                        controller: 'ConsulatMainController'
                    }
                },
                resolve: {
                    mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('consulat');
                        return $translate.refresh();
                    }]
                }
            });
    });
