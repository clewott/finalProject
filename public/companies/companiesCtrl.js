(function () {
    "use strict";

    angular
        .module('companies')
        .controller('companiesCtrl', ['$scope','$window', 'companiesSvc', '$location', '$routeParams', function ($scope, $window, companiesSvc, $location, $routeParams) {


            companiesSvc.getCompanies().success(function (companies) {
                $scope.companies = $window.companies = companies;
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

            $scope.deleteCompany = function (company) {
                companiesSvc.deleteCompany(company);
                  console.log("company deleted");
                  $location.path('/companies/list');
            };

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
              addCompanyMarkers(companies);
            }


            function addCompanyMarkers(companies) {
              for(var i=0; i<companies.length; i++) {
                geocoder.geocode( { 'address': companies[i].location }, function(results, status) {
                  for(var j=0; j<results.length; j++) {
                    console.log(results);
                  var marker = new google.maps.Marker({
                      title: "companies.name",
                      map: map,
                      position: results[j].geometry.location
                  });
                }
              });
            }
          }

          google.maps.event.addDomListener(window, 'load', initialize);

        }]);
})();
