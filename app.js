/**
 * Created by shankar pentyala on 29-01-2017.
 */
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home1.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'MapsAutomatic.html',
            controller: 'homeController'
        })
        .when('/Register', {
            templateUrl: 'Register.html',
            controller: 'registerController'
        });

});

animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'home1';
});

animateApp.controller('homeController', function($scope) {
   $scope.pageClass = 'Home';
});

animateApp.controller('registerController', function($scope) {
    $scope.pageClass = 'Register';
});
