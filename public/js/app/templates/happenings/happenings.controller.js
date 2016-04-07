(function() {
  "use strict";

  angular
    .module("app")
    .controller("HappeningsController", HappeningsController);

  HappeningsController.$inject = ['HappeningsService', '$log'];

  function HappeningsController(HappeningsService, $log) {
    var vm = this;
    vm.displayHappenings = HappeningsService.happening();
    $log.info(vm.displayHappenings);
  }

})();
