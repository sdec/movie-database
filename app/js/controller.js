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
        $scope.lang = $translate.use();

        $scope.setLang = function(language) {
            $translate.use(language);
            $scope.lang = $translate.use() || GLOBALS.langFallback;
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

        $scope.$on('loading-start', function () {
            $scope.loading = true;
        });

        $scope.$on('loading-stop', function () {
            $scope.loading = false;
        });
    }

    function MoviesDetailCtrl($scope, MoviesService, $stateParams) {

        MoviesService.getMovie($stateParams.imdbID)
            .then(function (movie) {
                $scope.movie = movie.data;
                $scope.search = $stateParams.search;
                return MoviesService.getVideoList(movie.data.Title);
            })
            .then(function (response) {
                var videos = JSON.parse(angular.toJson(response)).data.responseData.results;
                if (videos.length > 0) {
                    $scope.youtubes = videos;
                }
            });

        $scope.$on('loading-start', function () {
            $scope.loading = true;
        });

        $scope.$on('loading-stop', function () {
            $scope.loading = false;
        });
    }

})(angular.module('moviesApp'));