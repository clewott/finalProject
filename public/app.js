(function () {
    "use strict";

    angular.module('finalProject',[
    "ngRoute",
    "ngCookies",
    "posts",
    "companies"
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
