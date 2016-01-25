(function() {
    'use strict';

    angular
        .module('starwars.people')
        .directive('peopleDirective', peopleDirective);
    
    function peopleDirective() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/components/people/people.tpl.html',
            scope: {
                people: '=?bind'
            },          
            controller: PeopleController,   
            controllerAs: 'vm',
            bindToController: true          
        };
        return directive;
     
    }
    /* @ngInject */
    
    function PeopleController (PeopleService) {
        var vm = this;
        vm.people = [];
        vm.nextPage = "";
        activate();
        
        function activate() {
            return getPeople();      
        }
        
        function getPeople() {
            return PeopleService.getPeople(vm.nextPage)
                    .then(function(data) {
                        vm.people = data.results;
                        vm.nextPage = data.next;
                        console.log(vm.nextPage);
                        return vm.people;
                    })
        }
        
        vm.next = function() {  
            return getPeople(vm.nextPage);
        }      
    }
})();