'use strict';

angular.module('sejourApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('usager/account', {
                parent: 'usager',
                url: '/account',
                data: {
                    roles: ['ROLE_USAGER'],
                    pageTitle: 'account.page.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/usager/account/account.html',
                        controller: 'AccountUsagerController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('account');
                        return $translate.refresh();
                    }]
                }
            });
    });