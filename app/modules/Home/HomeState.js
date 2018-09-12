main.config(function($stateProvider){
    $stateProvider
        .state('/', {
            url: '/',
            views: {
                'header@': {
                    templateUrl: '/app/modules/_header/views/index.html',
                    controller: 'HeaderController',
                },
                'main@': {
                    templateUrl: '/app/modules/Home/views/index.html',
                    controller: 'MainController',
                },
                'about@/': {
                    templateUrl: '/app/modules/Home/views/_partials/about.html',
                },
                'banner@/': {
                    templateUrl: '/app/modules/Home/views/_partials/banner.html',
                },
                'service@/': {
                    templateUrl: '/app/modules/Home/views/_partials/service.html',
                },
                'portfolio@/': {
                    templateUrl: '/app/modules/Home/views/_partials/portfolio.html',
                },
                'pricing@/': {
                    templateUrl: '/app/modules/Home/views/_partials/pricing.html',
                },
                'footer@': {
                    templateUrl: '/app/modules/_footer/views/index.html',
                    controller: 'FooterController',
                }
            }
        })

        .state('home', {
            url: 'home',
            views: {
                'header@': {
                    templateUrl: '/app/modules/_header/views/index.html',
                    controller: 'HeaderController',
                },
                'main@': {
                    templateUrl: '/app/modules/Home/views/home.html',
                    controller: 'HomeController',
                },
                'footer@': {
                    templateUrl: '/app/modules/_footer/views/index.html',
                    controller: 'FooterController',
                }
            }
        })
})