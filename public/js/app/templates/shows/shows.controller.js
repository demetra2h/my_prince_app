(function() {
  "use strict";

  angular
    .module("app")
    .controller("ShowsController", ShowsController);

    ShowsController.$inject = ["$log"];

    function ShowsController($log) {
      var vm = this;

      vm.createShow = createShow;
      vm.show = {
        name: "",
        venue: "",
        city: "",
        state: ""
      };
      vm.show = [];

      function createShow() {
        $log.info("adding:", vm.show.name);

        vm.show.push(vm.show);
      }

      $log.info("ShowsController loaded");
    }

})();
