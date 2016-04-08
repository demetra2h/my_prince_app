(function() {
  "use strict";

  angular
    .module("app")
    .factory("HappeningsService", HappeningsService);

    HappeningsService.$inject = ['$http', '$log'];

    function HappeningsService($http, $log) {
      var service = {
        happenings: [],
        createHappening: createHappening,
        getHappenings:   getHappenings,
        deleteHappening: deleteHappening
      };

      function createHappening(happening) {
        return $http.post('/api/happenings', happening)
         .then(function(res) {
          return res.data;
         }, function(err) {
          $log.info(err);
         })
      }

      function getHappenings() {
       return $http.get('api/happenings')
         .then(function(res) {
           return res.data;
         }, function(err) {
          $log.info(err);
         });
      };
 // delete happening
      function deleteHappening(id) {
        return $http.delete('/api/happenings/' + id)
         .then(function(res) {
          return res.data;
          // happenings.splice(index, 1);
         }, function(err) {
          $log.info(err);
         })
      }

      return service;

    }

})();
