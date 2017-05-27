var myApp = angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'ngResource',
    'ngAnimate',
    'btford.socket-io']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

        //typical routes... when someone navigates to a given directory, load the partial, and use the controller
        $routeProvider.when('/home', {templateUrl: '/partials/home.html', controller: 'homeController'});
        $routeProvider.when('/about', {templateUrl: '/partials/about.html', controller: 'aboutController'});
        $routeProvider.when('/projects', {templateUrl: '/partials/projects.html', controller: 'projectsController'});
        $routeProvider.when('/projects/customerapi', {templateUrl: '/partials/projects/customerapi.html', controller: 'customerApiController'});
        $routeProvider.when('/projects/chat', {templateUrl: '/partials/projects/chat.html', controller: 'chatController'});

        //if no valid routes are found, redirect to /home
        $routeProvider.otherwise({redirectTo: '/home'});
        //new comment
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    }])
    .filter('startFrom', function(){
        return function(data, start){
            return data.slice(start);
        }
    });
