(function () {
    "use strict";

    angular
        .module('finalProject')
        .controller('homeCtrl',['$scope', '$location', '$anchorScroll', '$modal', function ($scope, $location, $anchorScroll, $modal) {

          // $scope.hideModal = function () {
          //   $('#myModal').modal('dismiss');
          //   $('.modal-backdrop').remove();
          // }

          $scope.login = function (username, password) {
            console.log($('#myModal'));
            if ( username === 'admin' && password === '1234') {
                $location.path('/admin');
            } else {
                $scope.loginError = "Invalid username/password combination";
            };
          };

          $(".downBtn").click(function() {
              $('body').animate({
                  scrollTop: $("#mainMap").offset().top
              }, 500);
          });


          $scope.isCollapsed = true;


          $scope.items = ['item1', 'item2', 'item3'];

          $scope.open = function (size) {

            var modalInstance = $modal.open({
              templateUrl: 'main.html',
              controller: 'ModalInstanceCtrl',
              size: size,
              resolve: {
                items: function () {
                  return $scope.items;
                }
              }
            });

            modalInstance.result.then(function (selectedItem) {
              $scope.selected = selectedItem;
            }, function () {
              $log.info('Modal dismissed at: ' + new Date());
            });
          };

        }]);

})();
