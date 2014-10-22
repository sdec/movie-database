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

        $translateProvider.translations('ch', {
            'title': '電影資料庫',
            'toggleNav': '切換導航',
            'movies': '電影',
            'searchMovies': '搜索電影',
            'typeSearchMovies': '鍵入要搜索的電影',
            'matches': '匹配',
            'view': '查看',
            'backTo': '返回',
            'plot': '劇情',
            'movieInfo': '電影資料e',
            'actors': '演員',
            'awards': '大獎',
            'country': '導演',
            'director': '導演',
            'genre': '流派',
            'language': '語言',
            'rating': '等級',
            'released': '發布',
            'loading': '加載'
        });

        $translateProvider.translations('ru', {
            'title': 'В базе Кино',
            'toggleNav': 'Переключить навигации',
            'movies': 'Кино',
            'searchMovies': 'Поиск Фильмы',
            'typeSearchMovies': 'Введите для поиска фильмов',
            'matches': 'соответствует',
            'view': 'Посм',
            'backTo': 'Назад к',
            'plot': 'земля',
            'movieInfo': 'Информация о фильме',
            'actors': 'Актеры',
            'awards': 'Награды',
            'country': 'Страна',
            'director': 'Директор',
            'genre': 'Жанр',
            'language': 'Язык',
            'rating': 'Рейтинг',
            'released': 'выхода',
            'loading': 'Загрузка'
        });

        var language = localStorage.getItem(GLOBALS.langKey) || GLOBALS.langs[0];
        $translateProvider.preferredLanguage(language);
    }]);

})(angular.module('moviesApp'));