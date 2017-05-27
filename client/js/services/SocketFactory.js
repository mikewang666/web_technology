myApp.factory('Socket', ['socketFactory', function(socketFactory){
    return socketFactory();
}])