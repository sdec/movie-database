/**
 * Created by admin on 22/10/2014.
 */
(function (module) {
    'use strict';

    module.directive('noImageErr', function () {
        return {
            controller: function ($scope) {
                $('img').error(function () {
                    var width = $(this).width();
                    var height = $(this).height();
                    height = height > 200 ? 200 : height;
                    $(this).attr('src', 'http://placehold.it/' + width + 'x' + height + '&text=Cover+not+available');
                });
            }
        };
    });

    module.directive('loader', function () {
        return {
            templateUrl: 'views/partials/loader.html',
            replace: true,
            controller: function ($scope) {
                $scope.$on('loading-start', function () {
                    $scope.loading = true;
                });

                $scope.$on('loading-stop', function () {
                    $scope.loading = false;
                });
            }
        };
    });

})(angular.module('moviesApp'));