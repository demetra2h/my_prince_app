(function() {
  "use strict";

  angular
    .module("app")
    .controller("ShowsController", ShowsController);

  ShowsController.$inject = ['showsService', '$log'];

  function ShowsController(showsService, $log) {
    var vm = this;
    vm.displayShows = showsService.show();
    $log.info(vm.displayShows);
  }

})();
