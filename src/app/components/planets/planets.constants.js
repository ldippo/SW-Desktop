(function() {
    'use strict';

    angular
        .module('starwars.planets')
        .constant('planetsConst', {
            API: 'http://swapi.co/api/planets'
        });
})();