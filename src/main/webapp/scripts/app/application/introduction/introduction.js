'use strict';

angular.module('sejourApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('introduction', {
                parent: 'site',
                url: '/Introduction',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/application/introduction/introduction.html',
                        controller: 'IntroductionController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('introduction');
                        return $translate.refresh();
                    }]
                }
            });
    });
