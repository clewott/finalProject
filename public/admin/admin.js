(function () {
    "use strict";

    angular
        .module('admin', [
            "ngRoute"
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/admin', {
                    templateUrl: 'admin/views/main.html',
                    controller: 'adminCtrl'
                })
                .when('/admin/companies', {
                    templateUrl: 'admin/views/companies.html',
                    controller: 'companiesCtrl'
                })
                .when('/admin/companies/create', {
                    templateUrl: 'admin/views/createCompany.html',
                    controller: 'companiesCtrl'
                })
                .when('/admin/companies/:id/update', {
                    templateUrl: 'admin/views/editCompany.html',
                    controller: 'companiesCtrl'
                })
                .when('/admin/jobs/', {
                    templateUrl: 'admin/views/jobs.html',
                    controller: 'jobsCtrl'
                })
                .when('/admin/jobs/create', {
                    templateUrl: 'admin/views/createJob.html',
                    controller: 'jobsCtrl'
                })
                .when('/admin/jobs/:id/update', {
                    templateUrl: 'admin/views/updateJob.html',
                    controller: 'jobsCtrl'
                })
        });

})();
