myApp.controller('homeController', ['$scope', function($scope){
    $scope.myInterval = 4000;
    $scope.slides = [{
        image: "img/BBC.jpg",
        link: "http://www.bbc.co.uk/"
    },
    {
        image: "img/times.jpg",
        link: "https://www.thetimes.co.uk/"
    },
    {
        image: "img/thesun.png",
        link: "https://www.thesun.co.uk/"
    },
    {
        image: "img/usatoday.png",
        link: "https://www.usatoday.com/"
    }];
}]);