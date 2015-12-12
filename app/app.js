'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.controllers',
    'myApp.directives',
    'myApp.services',
    'myApp.filters'
]).
config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/',{templateUrl: 'partials/movie-list.html', controller: 'MovieListCtrl'});
        $routeProvider.otherwise({redirectTo: '/'});
}]);
