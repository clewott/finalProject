(function () {
    "use strict";

    angular
        .module('events')
        .factory('eventsSvc', ['$http', '$rootScope', function ($http, $rootScope) {

            // public service methods
            return {
                getEvents: getEvents,
                getEvent: getEvent,
                createEvent: createEvent,
                editEvent: editEvent,
                deleteEvent: deleteEvent
            };

            function getEvents() {

                return $http.get("api/collections/events/");
            }

            function getEvent(eventId) {
                return $http.get("api/collections/events/" + eventId);
            }

            function createEvent(newEvent) {
                $http.post("api/collections/events/", newEvent).then(function (res) {
                    $rootScope.$broadcast("event:added");
                });
            }

            function editEvent(event) {
                $http.put("api/collections/events/" + event._id, event).then(function (res) {
                    $rootScope.$broadcast("event:updated");
                });

            }

            function deleteEvent(eventId) {
                $http.delete("api/collections/events/" + event._id, eventId).then(function (res) {
                    $rootScope.$broadcast("event:deleted");
                });
            }



        }]);
})();
