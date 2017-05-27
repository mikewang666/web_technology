myApp.factory('Api', ['$resource', function($resource){
    return {
        Customer: $resource('/api/customers/:id', {id: '@id'})
    }
}]);