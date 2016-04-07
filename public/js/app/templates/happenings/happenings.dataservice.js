(function() {
  "use strict";

  angular
    .module("app")
    .factory("HappeningsService", HappeningsService);

    HappeningsService.$inject = [];

    function HappeningsService() {
       var service = {
        happening:happening
      };

      function happening(){
        var happenings = [{
        happeningName:       "Purple Rain",
        venue:          "my basement",
        city:           "Burbank",
        state:          "CA",
        date:           "April 14, 2016"
      }];

      return happenings;
      }
      return service;

    }

})();
