(function () {
    "use strict";

    angular
        .module('companies')
        .controller('companiesCtrl', ['$scope','$window', 'companiesSvc', '$location', '$routeParams', '$rootScope', function ($scope, $window, companiesSvc, $location, $routeParams, $rootScope) {


            companiesSvc.getCompanies().success(function (companies) {
                $scope.companies = $window.companies = companies;
            });

            companiesSvc.getCompany($routeParams.companyId).success(function (company) {
                $scope.company = company;
            });


            $scope.editCompany = function (company) {
                console.log(company);
                companiesSvc.editCompany(company).then(function () {
                  $location.path('/admin/companies');
                });
            };

            $scope.deleteCompany = function (company) {
                companiesSvc.deleteCompany(company);
                  console.log("company deleted");
                  $location.path('/admin/companies');
            };

            var geocoder = new google.maps.Geocoder();
            var map;
            function initialize() {
              geocoder = new google.maps.Geocoder();
              var latlng = new google.maps.LatLng(32.7833, -79.9333);
              var mapOptions = {
                zoom: 11,
                center: latlng
              }
              $window.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
              // addCompanyMarkers(companies);
            };


          //   function addCompanyMarkers(companies) {
          //     for(var i=0; i<companies.length; i++) {
          //       geocoder.geocode( { 'address': companies[i].location }, function(results, status) {
          //         for(var j=0; j<results.length; j++) {
          //           console.log(results);
          //         var marker = new google.maps.Marker({
          //             title: "companies.name",
          //             map: map,
          //             position: results[j].geometry.location
          //         });
          //       }
          //     });
          //   }
          // }

          google.maps.event.addDomListener(window, 'load', initialize);


          $rootScope.$on("company:deleted",  function() {
      			companiesSvc.getCompanies().success(function (companies) {
              $scope.companies = companies;
            });
          });

          $scope.createCompany = function (company) {
              companiesSvc.createCompany(company);
              console.log(company);
              createlatlng(company);
              $location.path('/admin/companies');
          };

          function createlatlng(company) {
            geocoder.geocode({ 'address': company.location }, function(results, status) {
              console.log(results);
              var marker = new google.maps.Marker({
                  title: company.title,
                  map: map,
                  position: results[0].geometry.location
              });
              console.log(marker);
              console.log(company);
            }
            );
          };

        }]);
})();
