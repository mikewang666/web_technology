myApp.controller('customerApiController', ['$scope', 'Api', function($scope, Api){
    $scope.form = {};
    $scope.customers = [];
    $scope.pageSize = 5;
    $scope.currentPage = 1;

    Api.Customer.query({}, function(data){
        $scope.customers = data;
    });

    $scope.deleteAll = function(){
          bootbox.confirm("Are you sure you want to delete all ?", function(answer){
            if(answer == true)
                 Api.Customer.delete({}, function(data){
            $scope.customers = [];
        });
        });

    }

/*    $scope.delete = function(index){
        bootbox.confirm("Are you sure you want to delete this customer?", function(answer){
            if(answer == true)
                Api.Customer.delete({id: $scope.customers[index]._id}, function(data){
                    $scope.customers.splice(index, 1);
                });
        })
    }*/

    $scope.addToDatabase = function(){
        Api.Customer.save({}, $scope.form,
        function(data){
            $scope.customers.push(data);
        },
        function(err){
            bootbox.alert('Error: ' + err);
        });
    }
}]);