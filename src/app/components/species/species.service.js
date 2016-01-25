(function() {
'use strict';

    angular
        .module('starwars.species')
        .service('SpeciesService', SpeciesService);

    SpeciesService.$inject = ['$http', 'planetsConst', '$log'];
    function SpeciesService($http, speciesConst, log) {
        this.getSpecies = getSpecies;
        this.getSingleSpecies = getSingleSpecies;
        
        var api = speciesConst.API;

        ////////////////
        function getSpecies() {
            return $http.get(api)
                .then(getSpeciesComplete)
                .catch(getSpeciesErr);

            function getSpeciesComplete(response) {
                return response.data.results;
            }

            function getSpeciesErr(error) {
                log('XHR Failed for getSpecies.' + error.data);
            }
        }
        
        function getSingleSpecies(url) {
        
            return $http.get(url)
                .then(getSpeciesComplete)
                .catch(getSpeciesErr);

            function getSpeciesComplete(response) {
                return response.data;
            }

            function getSpeciesErr(error) {
                log('XHR Failed for getPlanet.' + error.data);
            }
        }
    }
})();