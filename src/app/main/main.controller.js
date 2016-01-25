(function() {
  'use strict';

  angular
    .module('starwars')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1453657147414;

    activate();

    function activate() {
      
      
    }

   

    
  }
})();
