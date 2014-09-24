(function () {
    "use strict";

    angular
        .module('events')
        .controller('eventsCtrl', ['$scope', 'eventsSvc', '$location', '$routeParams', function ($scope, eventsSvc, $location, $routeParams) {
            eventsSvc.getEvents().success(function (events) {
                $scope.events = events;
            });

            eventsSvc.getEvent($routeParams.companyId).success(function (event) {
                $scope.event = event;
            });

            $scope.createEvent = function (newEvent) {
                eventsSvc.createEvent(newEvent);
                $location.path('/events/list');
            };

            $scope.editEvent = function (event) {
                eventsSvc.editEvent(event);
                $location.path('/events/list');
            };

            $scope.deleteEvent = function (id) {
                eventsSvc.deleteEvent(id);
                $location.path('/events/list');
            }


        }]);
})();
