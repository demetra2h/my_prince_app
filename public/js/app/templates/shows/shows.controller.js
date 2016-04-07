(function() {
  "use strict";

  angular
    .module("app")
    .controller("ShowsController", ShowsController);

  ShowsController.$inject = ['ShowsService'];

  function ShowsController(ShowsService) {
    var vm = this;

    vm.shows = ShowsService;
  }

})();
