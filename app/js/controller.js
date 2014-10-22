/**
 * Created by admin on 20/10/2014.
 */

(function (module) {
    'use strict';

    module
        .controller('MenuCtrl', ['$scope', '$translate', 'GLOBALS', MenuCtrl])
        .controller('MoviesCtrl', ['$scope', 'MoviesService', '$stateParams', MoviesCtrl])
        .controller('MoviesDetailCtrl', ['$scope', 'MoviesService', '$stateParams', MoviesDetailCtrl]);

    function MenuCtrl($scope, $translate, GLOBALS) {

        $scope.lang = $translate.use() || GLOBALS.langFallback;
        // Fix not available yet: http://stackoverflow.com/questions/23659748/how-to-list-all-languages-that-are-loaded-by-angular-translate
        $scope.langs = GLOBALS.langs;

        $scope.setLang = function (language) {

            if($scope.langs.indexOf(language) == -1) {
                language = GLOBALS.langs[0];
            }

            $translate.use(language);
            $scope.lang = $translate.use();
            localStorage.setItem(GLOBALS.langKey, $translate.use());

        };
    }

    function MoviesCtrl($scope, MoviesService, $stateParams) {

        var timer;

        $scope.searchMovies = function () {

            if (!$scope.search) {
                $scope.movies = {};
                return;
            }

            clearTimeout(timer);
            timer = setTimeout($scope.fetchMovies, 500);
        };

        $scope.fetchMovies = function () {
            MoviesService.getMovies($scope.search).success(function (movies) {
                $scope.movies = movies.Search;
            });
        };

        if ($stateParams.search) {
            $scope.search = $stateParams.search;
            $scope.searchMovies();
        }
    }

    function MoviesDetailCtrl($scope, MoviesService, $stateParams) {

        MoviesService.getMovie($stateParams.imdbID)
            .then(function (movie) {
                $scope.movie = movie.data;
                $scope.search = $stateParams.search;

                return MoviesService.getVideoList($scope.movie.Title);
            })
            .then(function (response) {
                var videos = JSON.parse(angular.toJson(response)).data.responseData.results;
                if (videos.length > 0) {
                    $scope.youtubes = videos;
                }
                return MoviesService.getImageList($scope.movie.Title);
            })
            .then(function (response) {
                var images = JSON.parse(angular.toJson(response)).data.responseData.results;
                if (images.length > 0) {
                    $scope.images = images;
                }
            });
    }

})(angular.module('moviesApp'));