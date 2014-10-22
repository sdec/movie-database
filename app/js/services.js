/**
 * Created by admin on 20/10/2014.
 */

(function (module) {
    'use strict';

    module.service('MoviesService', ['$http', 'GLOBALS', function ($http, GLOBALS) {

        this.getMovies = function(search) {
            return $http.get(GLOBALS.moviesUrl + search);
        };

        this.getMovie = function(imdbID) {
            return $http.get(GLOBALS.movieUrl + imdbID);
        };

        this.getVideoList = function(query) {
            return $http.jsonp(GLOBALS.ytListUrl + query);
        };

    }]);

})(angular.module('moviesApp'));