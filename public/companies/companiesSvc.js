(function () {
    "use strict";

    angular
        .module('companies')
        .factory('companiesSvc', ['$http', '$rootScope', function ($http, $rootScope) {

            // public service methods
            return {
                getCompanies: getCompanies,
                getCompany: getCompany,
                createCompany: createCompany,
                editCompany: editCompany,
                deleteCompany: deleteCompany
            };

            function getCompanies() {

                return $http.get("api/collections/companies/");
            }

            function getCompany(companyId) {
                return $http.get("api/collections/companies/" + companyId);
            }

            function createCompany(newCompany) {
                $http.post("api/collections/companies/", newCompany).then(function (res) {
                    $rootScope.$broadcast("company:added");
                });
            }

            function editCompany(company) {
                $http.put("api/collections/companies/" + company._id, company).then(function (res) {
                    $rootScope.$broadcast("company:updated");
                });

            }

            function deleteCompany(companyId) {
                $http.delete("api/collections/companies/" + companyId).then(function (res) {
                    $rootScope.$broadcast("company:deleted");
                });
            }



        }]);
})();
