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

          $(".comp").on("mouseover", function() {
            $(".btnComp").css("display", "block");
            $(".compImg").css("opacity", "0.4");
          });

          $(".comp").on("mouseout", function() {
            $(".btnComp").css("display", "none");
            $(".compImg").css("opacity", "1.0");
          });

          $(".work").on("mouseover", function() {
            $(".btnJob").css("display", "block");
            $(".workImg").css("opacity", "0.4");
          });

          $(".work").on("mouseout", function() {
            $(".btnJob").css("display", "none");
            $(".workImg").css("opacity", "1.0");
          });

          $(".evt").on("mouseover", function() {
            $(".btnEvt").css("display", "block");
            $(".evtImg").css("opacity", "0.4");
          });

          $(".evt").on("mouseout", function() {
            $(".btnEvt").css("display", "none");
            $(".evtImg").css("opacity", "1.0");
          });

        }]);

})();
