(function () {
    "use strict";

    angular
        .module('companies')
        .controller('companiesCtrl', ['$scope','$window', 'companiesSvc', '$location', '$routeParams', '$rootScope', '$timeout', function ($scope, $window, companiesSvc, $location, $routeParams, $rootScope, $timeout) {


            companiesSvc.getCompanies().success(function (companies) {
                $scope.companies = $window.companies = window.companies = companies;
            });

            companiesSvc.getCompany($routeParams.id).success(function (company) {
                $scope.company = company;
            });

            $scope.createCompany = function (company) {
                geocoder.geocode({ 'address': company.location }, function(results, status) {
                  console.log(results[0].geometry);
                  company.geo = {
                    lat: results[0].geometry.location.k,
                    lng: results[0].geometry.location.B
                  };

                  companiesSvc.createCompany(company);

                });

                $location.path('/admin');
            };

            function createMarkers(companies) {
              console.log(companies);
              for(var i = 0; i< companies.length; i++) {
                var latLong = new google.maps.LatLng(companies[i].geo.lat,companies[i].geo.lng);
                var marker = new google.maps.Marker(
                {
                  title: companies[i].title,
                  map: map,
                  position: latLong,
                  icon: image
                });

              }
            };

            $scope.editCompany = function (company) {
                console.log(company);
                geocoder.geocode({ 'address': company.location }, function(results, status) {
                  console.log(results[0].geometry);
                  company.geo = {
                    lat: results[0].geometry.location.k,
                    lng: results[0].geometry.location.B
                  };

                  companiesSvc.editCompany(company);

                });

                $location.path('/admin');
            };

            $scope.deleteCompany = function (company) {
                companiesSvc.deleteCompany(company);
                  console.log("company deleted");
                  $location.path('/admin');
            };

            var image = 'images/pin.png';
            var geocoder = new google.maps.Geocoder();
            var map;
            function initialize() {
              geocoder = new google.maps.Geocoder();
              var latlng = new google.maps.LatLng(32.7833, -79.9333);
              var mapOptions = {
                zoom: 11,
                center: latlng
              };

              map = new google.maps.Map(document.getElementById("map"), mapOptions);

              for(var i = 0; i< companies.length; i++) {

                var marker = new google.maps.Marker({
                  title: companies[i].title,
                  map: map,
                  position: new google.maps.LatLng(companies[i].geo.lat,companies[i].geo.lng),
                  icon: image
                });

              }

            }

          $rootScope.$on("company:deleted",  function() {
      			companiesSvc.getCompanies().success(function (companies) {
              $scope.companies = companies;
            });
          });

          $rootScope.$on("company:added",  function() {
            companiesSvc.getCompanies().success(function (companies) {
              $scope.companies = companies;
            });
          });

          $rootScope.$on("company:updated",  function() {
            companiesSvc.getCompanies().success(function (companies) {
              $scope.companies = companies;
            });
          });

          $scope.mapInit = function () {

            initialize();
          }

        }]);
})();
