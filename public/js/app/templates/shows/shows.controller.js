(function() {
  "use strict";

  angular
    .module("app")
    .controller("ShowsController", ShowsController);

  ShowsController.$inject = ['showsService', '$log'];

  function ShowsController(showsService, $log) {
    var vm = this;

    vm.newShow = {};

    vm.displayShows = showsService.shows;

 vm.getShows = function() {
      showsService.getShows().then(function(shows) {
        shows.forEach(show => {
          showsService.shows.push(show);
        })
      }, function(err) {
        $log.info(err);
      })
    }

    vm.submitShow = function() {
      showsService.createShow(vm.newShow)
        .then(function(newShow){
          showsService.shows.push(newShow);
          vm.newShow = {};
        }, function(err) {
          $log.info(err)
        });
    }

  // delete shows

    vm.getShows();
  }

})();
