(function () {
    "use strict";

    angular
        .module('companies', [
            "ngRoute"
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/companies/map', {
                    templateUrl: 'companies/views/map.html',
                    controller: 'companiesCtrl'
                })
                .when('/companies/list', {
                    templateUrl: 'companies/views/list.html',
                    controller: 'companiesCtrl'
                })
                .when('/companies/new', {
                    templateUrl: 'companies/views/create.html',
                    controller: 'companiesCtrl'
                })
        });

})();
