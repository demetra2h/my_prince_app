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
  vm.deleteShow = function(id) {
   vm.displayShows = vm.displayShows.filter(function(r) {
        return r._id !== id;
      });
    showsService.deleteShow(id)
      .then(function(data) {
        $log.info(data)
      }, function(err) {
        $log.info(err)
      });
  }

    vm.getShows();
  }

})();
