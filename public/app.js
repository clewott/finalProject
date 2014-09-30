(function () {
    "use strict";

    angular.module('finalProject',[
    "ngRoute",
    "ngCookies",
    "google-maps",
    "ui.calendar",
    "ui.bootstrap",
    "companies",
    "jobs",
    "events",
    "admin"
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
