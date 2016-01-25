(function() {
'use strict';

    angular
        .module('starwars.people')
        .service('PeopleService', PeopleService);

    PeopleService.$inject = ['$http', 'peopleConst', '$log'];
    function PeopleService($http, peopleConst, log) {
        this.getPeople = getPeople;
        

        ////////////////
        function getPeople(next) {
        
        if(next.length === 0){
            var api = peopleConst.API
        }
        else {
            var api = next; 
        }
              
        return $http.get(api)
            .then(getPeopleComplete)
            .catch(getPeopleErr);

        function getPeopleComplete(response) {
   
            return response.data;
        }

        function getPeopleErr(error) {
            log('XHR Failed for getPeople.' + error.data);
        }
    }
    }
})();