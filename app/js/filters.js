/**
 * Created by admin on 22/10/2014.
 */

(function (module) {
    'use strict';

    module.filter('slug', function () {

        return function (input) {
            return input
                .toLowerCase()
                .replace(/[^\w ]+/g, '')
                .replace(/ +/g, '-');
        };

    });

    module.filter('noautoplay', function () {

        return function (input) {
            return input && input.length ? input.replace("&autoplay=1", "") : "";
        };

    });

})(angular.module('moviesApp'));