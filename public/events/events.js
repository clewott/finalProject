(function () {
    "use strict";

    angular
        .module('events', [
            "ngRoute"
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/events/list', {
                    templateUrl: 'events/views/list.html',
                    controller: 'eventsCtrl'
                })
        });

})();
