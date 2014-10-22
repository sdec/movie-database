/**
 * Created by admin on 22/10/2014.
 */

(function (module) {
    'use strict';

    module.config(function ($stateProvider, $urlRouterProvider, $sceProvider) {

        $urlRouterProvider.otherwise("/movies");

        $stateProvider
            .state('movie', {
                url: "/movies/:imdbID?search",
                templateUrl: "views/partials/movies.detail.html",
                controller: 'MoviesDetailCtrl'
            })
            .state('movieWithSlug', {
                url: "/movies/:imdbID/:slug?search",
                templateUrl: "views/partials/movies.detail.html",
                controller: 'MoviesDetailCtrl'
            })
            .state('movies', {
                url: "/movies?search",
                templateUrl: "views/movies.html",
                controller: 'MoviesCtrl'
            });

        $sceProvider.enabled(false);
    });

})(angular.module('moviesApp'));