(function () {
    "use strict";

    angular
        .module('finalProject')
        .controller('adminCtrl',['$scope', '$location', function ($scope, $location){


          var today = new Date();
          var hourNow = today.getHours();
          $scope.greeting;

          if (hourNow > 18) {
            $scope.greeting = 'Good Evening Admin!';
          } else if (hourNow > 11) {
            $scope.greeting = 'Good Afternoon Admin!';
          } else if (hourNow > 0 ) {
            $scope.greeting = 'Good Morning Admin!';
          } else {
            $scope.greeting = 'Welcome Admin!';
          }

        }]);

})();
