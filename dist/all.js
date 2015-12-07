var customApp = angular.module('customApp', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad',
]);
customApp
    .config(function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/home");

        $stateProvider
        
        //------------------------------
        // HOME
        //------------------------------

        .state ('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            // resolve: {
            //     loadPlugin: function($ocLazyLoad) {
            //         return $ocLazyLoad.load ([
            //             {
            //                 name: 'css',
            //                 insertBefore: '#app-level',
            //                 files: [
            //                     '',
            //                 ]
            //             },
            //             {
            //                 name: 'vendors',
            //                 files: [
            //                     ''
            //                 ]
            //             }
            //         ]);
            //     }
            // }
        });
    });
customApp

    // =========================================================================
    // Header Messages and Notifications list Data
    // =========================================================================

    .service('messageService', ['$resource', function($resource){
        this.getMessage = function(img, user, text) {
            var gmList = $resource("data/messages-notifications.json");
            console.log("I love Mary");
            return gmList.get({
                img: img,
                user: user,
                text: text
            });
        }; 
    }]);
angular.module("customApp", []).run(["$templateCache", function($templateCache) {$templateCache.put("footer.html","Copyright &copy; 2015 CoderDream App\r\n\r\n<ul class=\"f-menu\">\r\n    <li><a href=\"\">Home</a></li>\r\n    <li><a href=\"\">Dashboard</a></li>\r\n    <li><a href=\"\">Reports</a></li>\r\n    <li><a href=\"\">Support</a></li>\r\n    <li><a href=\"\">Contact</a></li>\r\n</ul>\r\n");}]);