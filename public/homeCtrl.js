(function () {
    "use strict";

    angular
        .module('finalProject')
        .controller('homeCtrl',['$scope', '$location', '$anchorScroll', '$modal', '$log', '$window', function ($scope, $location, $anchorScroll, $modal, $log, $window) {

          $(".downBtn").click(function() {
              $('body').animate({
                  scrollTop: $("#mainMap").offset().top
              }, 500);
          });


          $scope.open = function (size) {

            $window.modalInstance = $modal.open({
              templateUrl: 'views/modal.html',
              controller: 'ModalInstanceCtrl',
              size: size
            });
          };

          $scope.login = function (username, password) {
            if ( username === 'admin' && password === '1234') {
                    $location.path('/admin');
                    $window.modalInstance.close();
            } else {
                $scope.loginError = "Invalid username/password combination";
            }
          };

        }]);

})();
