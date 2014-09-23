(function () {
    "use strict";

    angular
        .module('companies', [
            "ngRoute"
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/companies', {
                    templateUrl: 'companies/views/list.html',
                    controller: 'companiesCtrl'
                })
                .when('/companies/new', {
                    templateUrl: 'companies/views/create.html',
                    controller: 'companiesCtrl'
                })
        });

})();
