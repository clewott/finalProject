(function () {
    "use strict";

    angular
        .module('finalProject')
        .controller('homeCtrl',['$scope', '$location', function ($scope, $location) {

          $scope.templates =
          [
            { url: 'login.html' },
            { url: 'home.html' }
          ];
            $scope.template = $scope.templates[0];
          $scope.login = function (username, password) {
            if ( username === 'admin' && password === '1234') {
                $location.path('/admin');
            } else {
                $scope.loginError = "Invalid username/password combination";
            };
          };

        }]);

})();
