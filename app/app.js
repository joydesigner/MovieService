'use strict';

// Declare app level module which depends on views, and components
angular.module('movieServiceApp', [
    'ngRoute',
    'movieServiceApp.controllers',
    'movieServiceApp.services'
]).
config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: 'partials/movie-details.html',
                controller: 'MovieDetailCtrl',
                controllerAs: 'vm'
            })
            .otherwise(
            {
                redirectTo: '/'
            });
}]);
