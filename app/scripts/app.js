(function() {
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home',{
                url: '/',
                templateUrl: '/templates/home.html',
                controller: 'chatCtrl as chat'
            });
    }
     angular
         .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
         .config(config);
 })();
