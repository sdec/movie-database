/**
 * Created by admin on 22/10/2014.
 */

(function (module) {
    'use strict';

    module.factory('MoviesInterceptor', ['$q', '$rootScope', function ($q, $rootScope) {

        return {
            request: function (config) {
                $rootScope.$broadcast('loading-start');
                return config || $q.when(config);
            },

            response: function (response) {
                $rootScope.$broadcast('loading-stop');
                return response || $q.when(response);
            }
        };

    }]);

})(angular.module('moviesApp'));