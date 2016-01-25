(function() {
  'use strict';

  angular
    .module('starwars', [
        'ngAnimate', 
        'ngCookies', 
        'ngTouch', 
        'ngSanitize', 
        'ngMessages', 
        'ngAria', 
        'ngResource', 
        'ui.router',
        'starwars.species',
        'starwars.planets',
        'starwars.people'
        ]);

})();
