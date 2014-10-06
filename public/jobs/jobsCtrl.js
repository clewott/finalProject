(function () {
    "use strict";

    angular
        .module('jobs')
        .controller('jobsCtrl', ['$scope', 'jobsSvc', '$location', '$routeParams', '$rootScope', function ($scope, jobsSvc, $location, $routeParams, $rootScope) {

          jobsSvc.getJobs().success(function (jobs) {
            $scope.jobs = jobs;
          });

          jobsSvc.getJob($routeParams.id).success(function (job) {
            $scope.job = job;
          });

          $scope.createJob = function (newJob) {
            jobsSvc.createJob(newJob);
            $location.path('/admin');
          };

          $scope.editJob = function (job) {
            jobsSvc.editJob(job);
            $location.path('/admin');
          };

          $scope.deleteJob = function (job) {
            jobsSvc.deleteJob(job);
            $location.path('/admin');
            console.log("job deleted");
          };

          $rootScope.$on("job:added", function() {
            jobsSvc.getJobs().success(function (jobs) {
              $scope.jobs = jobs;
            });
          });

          $rootScope.$on("job:updated", function() {
            jobsSvc.getJobs().success(function (jobs) {
              $scope.jobs = jobs;
            });
          });

          $rootScope.$on("job:deleted", function() {
            jobsSvc.getJobs().success(function (jobs) {
              $scope.jobs = jobs;
            });
          });


        }]);
})();
