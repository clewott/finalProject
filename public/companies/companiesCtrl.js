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
                console.log(newCompany);
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

            var geocoder;
            var map;
            function initialize() {
              geocoder = new google.maps.Geocoder();
              var latlng = new google.maps.LatLng(32.7833, -79.9333);
              var mapOptions = {
                zoom: 11,
                center: latlng
              }
              map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            }

            $scope.$on('$routeChangeStart', function(next, current) {
              var address = document.getElementById('streetAddress').value;
              console.log(address);
              geocoder.geocode( { 'address': address}, function(results, status) {
              for(i = 0; i < $scope.companies.length; i++) {
                if (status == google.maps.GeocoderStatus.OK) {
                  map.setCenter(results[i].geometry.location);
                  var marker = new google.maps.Marker({
                      map: map,
                      position: results[i].geometry.location
                  });
                } else {
                  alert('Geocode was not successful for the following reason: ' + status);
                }
              }
              });
            })

            google.maps.event.addDomListener(window, 'load', initialize);

            // $scope.$on('$routeChangeStart', function(next, current) {
            //   function initialize();
            // });

        }]);
})();
