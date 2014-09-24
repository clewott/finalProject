angular.module("app-directives", [])
    .directive('map', function () {
      return {
        templateUrl: '<div></div>',
        restrict: 'EA',
        replace: true,
        link: function (scope, element) {

          scope.markers = [];

          scope.map = new google.maps.Map(element[0], {
            center: new google.maps.LatLng(32.7833, -79.9333),
            zoom: 11
          });

          scope.addMarker = function (lat, lnt) {
            var marker = new google.maps.Marker({
              map: scope.map,
              position:  new google.maps.LatLng(lat, lng)
            });

            scope.markers.push(marker);
          };

        }
      }
    });
