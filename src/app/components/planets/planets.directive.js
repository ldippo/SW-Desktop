(function() {
    'use strict';

    angular
        .module('starwars.planets')
        .directive('planetsDirective', planetsDirective);
  
    function planetsDirective() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/components/planets/planets.tpl.html',
            scope: {
                planets: '=?bind'
            },          
            controller: PlanetsController,   
            controllerAs: 'vm',
            bindToController: true          
        };
        return directive;
     
    }
    /* @ngInject */
    function PlanetsController (PlanetsService) {
        var vm = this;
        vm.planets = [];
        
        activate();
        
        function activate() {
            return getPlanets().then(function() {

            })        
        }
        
        function getPlanets() {
            return PlanetsService.getPlanets()
                    .then(function(data) {
                        vm.planets = data;
                        return vm.planets;
                    })
        }      
    }
})();