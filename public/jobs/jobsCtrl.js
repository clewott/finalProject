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
                jobsSvc.editCompany(job).then(function (res) {
                  $location.path('/admin');
                });
            };

            $scope.deleteJob = function (job) {
                jobsSvc.deleteJob(job);
                console.log("job deleted");
                $location.path('/admin');
            };

            $rootScope.$on("job:added",  function() {
              jobSvc.getJobs().success(function (jobs) {
                $scope.jobs = jobs;
              });
            });

            $rootScope.$on("job:updated",  function() {
              jobSvc.getJobs().success(function (jobs) {
                $scope.jobs = jobs;
              });
            });

            $rootScope.$on("job:deleted",  function() {
              jobSvc.getJobs().success(function (jobs) {
                $scope.jobs = jobs;
              });
            });


        }]);
})();
