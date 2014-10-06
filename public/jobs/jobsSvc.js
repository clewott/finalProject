(function () {
    "use strict";

    angular
        .module('jobs')
        .factory('jobsSvc', ['$http', '$rootScope', '$log', function ($http, $rootScope, $log) {

          // public service methods
          return {
            getJobs: getJobs,
            getJob: getJob,
            createJob: createJob,
            editJob: editJob,
            deleteJob: deleteJob
          };

          function getJobs() {
            return $http.get("api/collections/jobs/");
          }

          function getJob(jobId) {
            return $http.get("api/collections/jobs/" + jobId);
          }

          function createJob(newJob) {
            $http.post("api/collections/jobs/", newJob).then(function (res) {
              $rootScope.$broadcast("job:added");
            });
          }

          function editJob(job) {
            $http.put("api/collections/jobs/" + job._id, job).then(function (res) {
              $rootScope.$broadcast("job:updated");
              $log.info("job:updated");
            });

          }

          function deleteJob(job) {
            $http.delete("api/collections/jobs/" + job._id).then(function (res) {
              $rootScope.$broadcast("job:deleted");
              $log.info("job:deleted");
            });
          }


        }]);
})();
