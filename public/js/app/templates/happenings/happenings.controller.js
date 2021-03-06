(function() {
  "use strict";

  angular
    .module("app")
    .controller("HappeningsController", HappeningsController);

  HappeningsController.$inject = ['HappeningsService', '$log', '$state'];

  function HappeningsController(HappeningsService, $log, $state) {
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
          $state.go("info");
        }, function(err) {
          $log.info(err)
        });
    }
  // delete happening
 // delete shows
  vm.deleteHappening = function(id) {
   vm.displayHappenings = vm.displayHappenings.filter(function(r) {
        return r._id !== id;
      });
    HappeningsService.deleteHappening(id)
      .then(function(data) {
        $log.info(data)
      }, function(err) {
        $log.info(err)
      });
  }

    vm.getHappenings();
  }

})();
