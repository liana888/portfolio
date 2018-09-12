main = angular.module('main', ['ui.router']);

main.run(function ($rootScope) {
    $rootScope.init = function () {
        $('#preloader').fadeOut(1000);

    }
});