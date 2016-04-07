(function() {
  "use strict";

  angular
    .module("app")
    .factory("showsService", showsService);

    showsService.$inject = [];

    function showsService() {
      var service = {
        show:show
      };

      return service;


      function show(){
        var shows = [{
        bandName:       "Purple Reign",
        venue:          "knitting factory",
        city:           "Hollywood",
        state:          "CA",
        date:           "May 4, 2016"
      }];

      return shows;
      }
    }

})();
