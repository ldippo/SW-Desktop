(function() {
    'use strict';

    angular
        .module('starwars.species')
        .constant('speciesConst', {
            API: 'http://swapi.co/api/species'
        });
})();