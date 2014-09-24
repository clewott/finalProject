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
            $scope.options = {scrollwheel: true};

            $scope.companyMarkers = [{
              id:0,
              coords: {
                latitude: 32.7833,
                longitude: -79.9333
              }
              }];

            $scope.addMarker = function (marker) {
               var idKey = $scope.companyMarkers.lenth ? 0 : $scope.companyMarkers.length;

                $scope.companyMarkers.push({
                    id: idKey,
                    coords: {
                    latitude: $scope.marker.markerLat,
                    longitude: $scope.marker.markerLng
                  }
                });



                console.log('Maker add: ' + $scope.companyMarkers);
                $scope.markerLat ="";
                $scope.markerLng ="";
            };



            $scope.marker = {
              id:0,
              coords: {
                latitude: 32.7833,
                longitude: -79.9333
              }
              }

        }]);
})();
