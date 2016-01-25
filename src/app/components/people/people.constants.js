(function() {
    'use strict';

    angular
        .module('starwars.people')
        .constant('peopleConst', {
            API: 'http://swapi.co/api/people'
        });
})();