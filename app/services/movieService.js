/**
 * Created by xinzheng on 12/12/15.
 */
(function(){
    'use strict';

    angular
        .module("movieServiceApp.services", ['ngResource'])
        .factory('movieService', ['$resource', movieService]);

    function movieService($resource) {
        var movies = null;
        function getMovieById(id) {
            if(id){
                movies = $resource('http://www.omdbapi.com/?i=:movieId');
                return movies;
            }

        };

        function getMovieByName(name) {
            if(name) {
                movies = $resource('http://www.omdbapi.com/?t=:movieName');
                return movies;
            }
        };


        return {
            getMovieById: getMovieById,
            getMovieByName: getMovieByName
        }

    };

}());