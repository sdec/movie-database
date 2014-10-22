/**
 * Created by admin on 22/10/2014.
 */

(function (module) {
    'use strict';

    module.constant('GLOBALS', {
        moviesUrl: 'http://www.imdbapi.com/?s=',
        movieUrl: 'http://www.imdbapi.com/?i=',
        ytListUrl: 'http://ajax.googleapis.com/ajax/services/search/video?v=1.0&callback=JSON_CALLBACK&q=',
        langKey: 'language',
        langFallback: 'en'
    });

    module.config(function ($httpProvider) {
        $httpProvider.interceptors.push('MoviesInterceptor');
    });

})(angular.module('moviesApp'));
