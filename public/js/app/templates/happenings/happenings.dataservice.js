(function() {
  "use strict";

  angular
    .module("app")
    .factory("HappeningsService", HappeningsService);

    happeningService.$inject = [];

    function HappeningsService() {
      var happenings = [{
        whatsHappening: "screening of Purple Rain!",
        venue:          "my basement",
        city:           "burbank",
        state:          "CA",
        date:           "June 4, 2016"
      }];

      return happenings;
    }

})();
