(function() {
  "use strict";

  angular
    .module("app")
    .controller("CoverBandsControllers", CoverBandsControllers);

    CoverBandsControllers.$inject = ["$log"];

    function CoverBandsController($log) {
      var vm = this;

      vm.createBand = createBand;
      vm.band = {
        name: "",
        venue: "",
        city: "",
        state
      };
      vm.band = [];

      function createBand() {
        $log.info("adding:", vm.band.name);

        vm.band.push(vm.band);
      }

      $log.info("CoverBandsController loaded");
    }

})();
