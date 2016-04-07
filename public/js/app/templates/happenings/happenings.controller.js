(function() {
  "use strict";

  angular
    .module("app")
    .controller("HappeningsController", HappeningsController);

  HappeningsController.$inject = ['HappeningsService'];

  function HappeningsController(HappeningsService) {
    var vm = this;

    vm.happenings = HappeningsService;
  }

})();
