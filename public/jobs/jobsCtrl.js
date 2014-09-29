(function () {
    "use strict";

    angular
        .module('jobs')
        .controller('jobsCtrl', ['$scope', 'jobsSvc', '$location', '$routeParams', function ($scope, jobsSvc, $location, $routeParams) {
            jobsSvc.getJobs().success(function (jobs) {
                $scope.jobs = jobs;
            });

            jobsSvc.getJob($routeParams.id).success(function (job) {
                $scope.job = job;
            });

            $scope.createJob = function (newJob) {
                jobsSvc.createJob(newJob);
                $location.path('/admin/jobs');
            };

            $scope.editJob = function (job) {
                jobsSvc.editCompany(job).then(function (res) {
                  $location.path('/jobs/list');
                });
            };

            $scope.deleteJob = function (job) {
                jobsSvc.deleteJob(job);
                console.log("job deleted");
                $location.path('/admin/jobs');
            };


        }]);
})();
