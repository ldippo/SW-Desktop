(function() {
  'use strict';

  angular
    .module('starwars')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
