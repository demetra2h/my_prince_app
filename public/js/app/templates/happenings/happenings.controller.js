(function() {
  "use strict";

  angular
    .module("app")
    .controller("HappeningsController", HappeningsController);

  HappeningsController.$inject = ['HappeningsService', '$log'];

  function HappeningsController(HappeningsService, $log) {
    var vm = this;

    vm.newHappening = {};

    vm.displayHappenings = HappeningsService.happenings;

    vm.getHappenings = function() {
      HappeningsService.getHappenings().then(function(haps) {
        haps.forEach(hap => {
          HappeningsService.happenings.push(hap);
        })
      }, function(err) {
        $log.info(err);
      })
    }

    vm.submitHappening = function() {
      HappeningsService.createHappening(vm.newHappening)
        .then(function(newHap){
          HappeningsService.happenings.push(newHap);
          vm.newHappening = {};
        }, function(err) {
          $log.info(err)
        });
    }

    vm.getHappenings();
  }

})();
