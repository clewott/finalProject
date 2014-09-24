(function () {
    "use strict";

    angular.module('finalProject',[
    "ngRoute",
    "ngCookies",
    "google-maps",
    "companies",
    "jobs",
    "events",
    "app-directives"
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: "views/main.html",
                controller: "homeCtrl"
            })
            .otherwise({
                redirectTo: '/'
            });
    });

})();
