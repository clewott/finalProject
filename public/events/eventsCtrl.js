(function () {
    "use strict";

    angular
        .module('events')
        .controller('eventsCtrl', ['$scope', 'eventsSvc', '$location', '$routeParams', function ($scope, eventsSvc, $location, $routeParams) {
            // eventsSvc.getEvents().success(function (events) {
            //     $scope.events = events;
            // });

            eventsSvc.getEvent($routeParams.companyId).success(function (event) {
                $scope.event = event;
            });

            $scope.createEvent = function (newEvent) {
                eventsSvc.createEvent(newEvent);
                $location.path('/events/list');
                $scope.createEvent = {};
            };

            $scope.editEvent = function (event) {
                eventsSvc.editEvent(event);
                $location.path('/events/list');
            };

            $scope.deleteEvent = function (id) {
                eventsSvc.deleteEvent(id);
                $location.path('/events/list');
            }

            $scope.twitInit = function () {

              !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
            }


            /* Calendar: http://angular-ui.github.io/ui-calendar/ */

            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            /* event source that pulls from google.com */
            $scope.eventSource = {
                    url: "https://www.google.com/calendar/feeds/cu5i8ks6fsc42hfsjne51ausq0%40group.calendar.google.com/public/basic",
                    className: 'gcal-event',           // an option!
                    currentTimezone: 'America/Chicago' // an option!
            };
            /* event source that contains custom events on the scope */
            $scope.events = [
              // {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false}
            ];
            /* event source that calls a function on every view switch */
            $scope.eventsF = function (start, end, timezone, callback) {
              var s = new Date(start).getTime() / 1000;
              var e = new Date(end).getTime() / 1000;
              var m = new Date(start).getMonth();
              var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
              callback(events);
            };

            $scope.calEventsExt = {
               color: '#f00',
               textColor: 'yellow',
               events: [
                  {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
                  {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
                  {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, d),url: 'http://google.com/'}
                ]
            };
            /* alert on eventClick */
            $scope.alertOnEventClick = function( event, allDay, jsEvent, view ){
                $scope.alertMessage = (event.title + ' was clicked ');
            };
            /* alert on Drop */
             $scope.alertOnDrop = function( event, revertFunc, jsEvent, ui, view){
               $scope.alertMessage = ('Event Droped on ' + event.start.format());
            };
            /* alert on Resize */
            $scope.alertOnResize = function( event, jsEvent, ui, view){
               $scope.alertMessage = ('Event end date was moved to ' + event.end.format());
            };
            /* add and removes an event source of choice */
            $scope.addRemoveEventSource = function(sources,source) {
              var canAdd = 0;
              angular.forEach(sources,function(value, key){
                if(sources[key] === source){
                  sources.splice(key,1);
                  canAdd = 1;
                }
              });
              if(canAdd === 0){
                sources.push(source);
              }
            };
            /* add custom event*/
            $scope.addEvent = function() {
              $scope.events.push({
                title: 'Open Sesame',
                start: new Date(y, m, d),
                end: new Date(y, m, d),
                className: ['openSesame']
              });
            };
            /* remove event */
            $scope.remove = function(index) {
              $scope.events.splice(index,1);
            };

            /* config object */
            $scope.uiConfig = {
              calendar:{
                height: 450,
                editable: true,
                header:{
                  left: 'title',
                  center: '',
                  right: 'today prev,next'
                },
                eventClick: $scope.alertOnEventClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize
              }
            };

            /* event sources array*/
            $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
            $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];

        }]);
})();
