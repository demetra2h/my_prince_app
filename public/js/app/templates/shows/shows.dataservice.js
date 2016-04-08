(function() {
  "use strict";

  angular
    .module("app")
    .factory("showsService", showsService);

    showsService.$inject = ['$http', '$log'];

     function showsService($http, $log) {
      var service = {
        shows: [],
        createShow: createShow,
        deleteShow: deleteShow,
        getShows:   getShows
      };

      function createShow(show) {
        return $http.post('/api/shows', show)
         .then(function(res) {
          return res.data;
         }, function(err) {
          $log.info(err);
         })
      }

      function getShows() {
       return $http.get('api/shows')
         .then(function(res) {
           return res.data;
         }, function(err) {
          $log.info(err);
         });
      };
// deleting
       function deleteShow(show) {
        return $http.post('/api/shows' + id)
         .then(function(res) {
          return res.data;
         }, function(err) {
          $log.info(err);
         })
      }

      return service;

    }

})();
