(function() {
    'use strict';

    angular
        .module('starwars.species')
        .directive('speciesDirective', speciesDirective);
  
    function speciesDirective() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'EA',
            template: '<span>{{vm.species.name}}</span>',
            scope: {
                url: '@speciesLink',
                species: '=?bind'
            },          
            controller: SpeciesController,   
            controllerAs: 'vm',
            bindToController: true          
        };
        return directive;
     
    }
    /* @ngInject */
    function SpeciesController (SpeciesService) {
        var vm = this;
        var url = vm.url;
        vm.species = {};
        
        activate();
        
        function activate() {
            
            return getSpecies().then(function() {
    
            });        
        }
        
        function getSpecies() {
            return SpeciesService.getSingleSpecies(url)
                    .then(function(data) {
                        vm.species = data;
                        return vm.species;
                    });
        }      
    }
})();