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
                $location.path('/companies');
            };

            $scope.editCompany = function (company) {
                companiesSvc.editCompany(company);
                $location.path('/companies');
            };

            $scope.deleteCompany = function (id) {
                companiesSvc.deleteCompany(id);
                $location.path('/companies');
            }


        }]);
})();
