(function () {
    "use strict";

    angular
        .module('finalProject')
        .controller('homeCtrl',['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {

          $scope.hideModal = function () {
            $('#myModal').modal('dismiss');
            $('.modal-backdrop').remove();
          }

          $scope.login = function (username, password) {
            console.log($('#myModal'));
            if ( username === 'admin' && password === '1234') {
                $location.path('/admin');
            } else {
                $scope.loginError = "Invalid username/password combination";
            };
          };

          $scope.scrollTo = function(id) {
            $location.hash(id);
            $anchorScroll();
          }

          $scope.isCollapsed = true;

        }]);

})();
