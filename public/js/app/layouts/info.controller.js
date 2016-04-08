(function() {
  "use strict";

  angular
    .module("app")
    .controller("InfoController", InfoController);

  InfoController.$inject = ['$log', '$state', 'HappeningsService', "showsService"];

  function InfoController($log, $state, HappeningsService, showsService) {
    var vm = this;

    HappeningsService.getHappenings()
      .then(function(happenings) {
        vm.happenings = happenings;
      });

    showsService.getShows()
    .then(function(shows) {
    vm.shows = shows;
    });

  }

})();
