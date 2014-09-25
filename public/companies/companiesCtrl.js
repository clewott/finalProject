(function () {
    "use strict";

    angular
        .module('companies')
        .controller('companiesCtrl', ['$scope', 'companiesSvc', '$location', '$routeParams', function ($scope, companiesSvc, $location, $routeParams) {
            companiesSvc.getCompanies().success(function (companies) {
                $scope.companies = companies;
            });

            companiesSvc.getCompany($routeParams.companyId).success(function (company) {
                $scope.company = company;
            });

            $scope.createCompany = function (newCompany) {
                companiesSvc.createCompany(newCompany);
                $location.path('/companies/list');
            };

            $scope.editCompany = function (company) {
                companiesSvc.editCompany(company);
                $location.path('/companies/list');
            };

            $scope.deleteCompany = function (id) {
                companiesSvc.deleteCompany(id);
                $location.path('/companies/list');
            }

            //Default location
            $scope.map = {
              center: {
                latitude: 32.7833,
                longitude: -79.9333
              },
              zoom: 11
            }
            // $scope.options = {scrollwheel: true};
            //
            // $scope.companyMarkers = [];
            //
            // $scope.addMarker = function (marker) {
            //    var idKey = $scope.companyMarkers.length ? 0 : $scope.companyMarkers.length;
            //
            //     $scope.companyMarkers.push({
            //         id: idKey,
            //         coords: {
            //         latitude: $scope.marker.markerLat,
            //         longitude: $scope.marker.markerLng
            //       }
            //     });
            //
            //     console.log('Maker add: ' + $scope.companyMarkers);
            //     $scope.markerLat ="";
            //     $scope.markerLng ="";
            // };

            var geocoder;
            var map;
            $scope.initialize = function () {
              geocoder = new google.maps.Geocoder();
              var latlng = new google.maps.LatLng(32.7833, -79.9333);
              var mapOptions = {
                zoom: 11,
                center: latlng
              }
              map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
            }

            console.log($scope.geocoder);
            $scope.codeAddress = function () {
              var address = $scope.location.address;
              geocoder.geocode( { '$scope.location.address': address}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                  map.setCenter(results[0].geometry.location);
                  var marker = new google.maps.Marker({
                      map: map,
                      position: results[0].geometry.location
                  });
                } else {
                  alert("Geocode was not successful for the following reason: " + status);
                }
              });
            }


        }]);
})();
