(function() {
    'use strict';

    angular
        .module('starwars.planets')
        .directive('planetDirective', planetDirective);
  
    function planetDirective() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'EA',
            template: '<span id="{{vm.planet.name}}-{{vm.id}}">{{vm.planet.name}}</span><span for="{{vm.planet.name}}-{{vm.id}}" class="mdl-tooltip">HyperText Markup Language</span>',
            scope: {
                url: '@planetLink',
                id: '@id',
                planet: '=?bind'
            },          
            controller: PlanetController,   
            controllerAs: 'vm',
            bindToController: true          
        };
        return directive;
     
    }
    /* @ngInject */
    function PlanetController (PlanetsService) {
        var vm = this;
        var url = vm.url;
        vm.planet = {};
        
        activate();
        
        function activate() {
            
            return getPlanet().then(function() {
    
            });        
        }
        
        function getPlanet() {
            return PlanetsService.getPlanet(url)
                    .then(function(data) {
                        vm.planet = data;
                        return vm.planet;
                    });
        }      
    }
})();