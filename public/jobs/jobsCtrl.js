(function () {
    "use strict";

    angular
        .module('jobs')
        .controller('jobsCtrl', ['$scope', 'jobsSvc', '$location', '$routeParams', function ($scope, jobsSvc, $location, $routeParams) {
            jobsSvc.getJobs().success(function (jobs) {
                $scope.jobs = jobs;
            });

            jobsSvc.getJob($routeParams.jobId).success(function (job) {
                $scope.job = job;
            });

            $scope.createJob = function (newJob) {
                jobsSvc.createJob(newJob);
                $location.path('/jobs/list');
            };

            $scope.editJob = function (job) {
                jobsSvc.editCompany(job);
                $location.path('/jobs/list');
            };

            $scope.deleteJob = function (id) {
                jobsSvc.deleteJob(id);
                $location.path('/jobs/list');
            }


        }]);
})();
