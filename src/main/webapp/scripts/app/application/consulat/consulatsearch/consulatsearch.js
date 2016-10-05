'use strict';

angular.module('sejourApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('consulatsearch', {
                parent: 'site',
                url: '/consulat/recherche',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/application/consulat/consulatsearch/consulatsearch.html',
                        controller: 'ConsulatSearchController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('consulat');
                        return $translate.refresh();
                    }]
                }
            });
    });
