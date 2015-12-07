jarvisApp
    .config(function ($stateProvider, $urlRouterProvider){
        
        $stateProvider

        //------------------------------
        // HOME (with ocLazyLoad Example)
        //------------------------------

        .state ('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            resolve: {
                loadPlugin: function($ocLazyLoad) {
                    return $ocLazyLoad.load ([
                        // {
                        //     name: 'css',
                        //     insertBefore: '#app-level',
                        //     files: [
                        //         '',
                        //     ]
                        // },
                        {
                            name: 'vendors',
                            files: [
                                'vendors/lib/classie/classie.js'
                            ]
                        }
                    ]);
                }
            }
        });

        $urlRouterProvider.otherwise("/home");
    });