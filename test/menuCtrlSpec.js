/**
 * Created by admin on 22/10/2014.
 */

describe('Testing the Menu controller & language features', function () {
    var $scope, ctrl;

    beforeEach(function () {

        module('moviesApp');

        inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            ctrl = $controller('MenuCtrl', {
                $scope: $scope
            });
        });
    });

    it('Should have a setLang method', function () {
        expect(ctrl.setLang).not.toBe(null);
    });

    it('Should set a language when using setlang', function () {
        $scope.setLang('en');
        expect($scope.lang).toBe('en');

        $scope.setLang('nl');
        expect($scope.lang).toBe('nl');
    });

    it('Should not set a language when an invalid language is used', function () {
        $scope.setLang('invalid');
        expect($scope.lang).not.toBe('invalid');
    });

});