(function() {
'use strict';

    angular
        .module('starwars.planets')
        .service('PlanetsService', PlanetsService);

    PlanetsService.$inject = ['$http', 'planetsConst', '$log'];
    function PlanetsService($http, planetsConst, log) {
        this.getPlanets = getPlanets;
        this.getPlanet = getPlanet;
        
        var api = planetsConst.API;

        ////////////////
        function getPlanets() {
            return $http.get(api)
                .then(getPlanetsComplete)
                .catch(getPlanetsErr);

            function getPlanetsComplete(response) {
                return response.data.results;
            }

            function getPlanetsErr(error) {
                log('XHR Failed for getPlanets.' + error.data);
            }
        }
        
        function getPlanet(url) {
        
            return $http.get(url)
                .then(getPlanetComplete)
                .catch(getPlanetErr);

            function getPlanetComplete(response) {
                return response.data;
            }

            function getPlanetErr(error) {
                log('XHR Failed for getPlanet.' + error.data);
            }
        }
    }
})();