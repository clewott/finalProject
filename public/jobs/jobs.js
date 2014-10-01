(function () {
    "use strict";

    angular
        .module('jobs', [
            "ngRoute"
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/jobs/list', {
                    templateUrl: 'jobs/views/list.html',
                    controller: 'jobsCtrl'
                })
                .when('/jobs/list/:id', {
                    templateUrl: 'jobs/views/show.html',
                    controller: 'jobsCtrl'
                })
        });

})();
