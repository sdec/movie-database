/**
 * Created by admin on 22/10/2014.
 */

(function (module) {
    'use strict';

    module.config(['$translateProvider', 'GLOBALS', function ($translateProvider, GLOBALS) {
        $translateProvider.translations('en', {
            'title': 'Movie Database',
            'toggleNav': 'Toggle navigation',
            'movies': 'Movies',
            'searchMovies': 'Search movies',
            'typeSearchMovies': 'Type to search movies',
            'matches': 'matches',
            'view': 'View',
            'backTo': 'Back to',
            'plot': 'Plot',
            'movieInfo': 'Movie information',
            'actors': 'Actors',
            'awards': 'Awards',
            'country': 'Country',
            'director': 'Director',
            'genre': 'Genre',
            'language': 'Language',
            'rating': 'Rating',
            'released': 'Released',
            'loading': 'Loading'
        });

        $translateProvider.translations('nl', {
            'title': 'Film Database',
            'toggleNav': 'Schakel navigatie',
            'movies': 'Films',
            'searchMovies': 'Zoek films',
            'typeSearchMovies': 'Typ om films te zoeken',
            'matches': 'resultaten',
            'view': 'Bekijk',
            'backTo': 'Terug naar',
            'plot': 'Plot',
            'movieInfo': 'Film informatie',
            'actors': 'Acteurs',
            'awards': 'Prijzen',
            'country': 'Land',
            'director': 'Producent',
            'genre': 'Genre',
            'language': 'Taal',
            'rating': 'Score',
            'released': 'Uitgebracht',
            'loading': 'Laden'
        });

        var language = localStorage.getItem(GLOBALS.langKey) || GLOBALS.langFallback;
        $translateProvider.preferredLanguage(language);
    }]);

})(angular.module('moviesApp'));