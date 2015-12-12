/**
 * Created by xinzheng on 12/12/15.
 */
(function(){
    'use strict';
    angular
        .module("movieServiceApp.controllers", [])
        .controller("MovieDetailCtrl", ["$scope","movieService" , getMovieDetail]);

    function getMovieDetail( $scope, movieService ){
        var vm  = this;

        $scope.getMovieById = function(id){
            movieService.getMovieById(id)
                .get({movieId: id})
                .$promise.then(function(mv){
                    vm.movie = mv;
                });
        };

        $scope.getMovieByName = function(name) {
            movieService.getMovieByName(name)
                .get({ movieName: name })
                .$promise.then(function(mv){
                    vm.movie = mv;
                });
        };
    };

}());