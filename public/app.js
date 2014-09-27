(function () {
    "use strict";

    angular.module('finalProject',[
    "ngRoute",
    "ngCookies",
    "google-maps",
    "companies",
    "jobs",
    "events"
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: "views/main.html",
                controller: "homeCtrl"
            })
            .when('/admin',{
                templateUrl: "views/admin.html",
                controller: "homeCtrl"
            })
            .otherwise({
                redirectTo: '/'
            });
    });

})();
