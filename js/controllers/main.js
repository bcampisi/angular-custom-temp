jarvisApp

    .controller('customAppCtrl', ['$scope', function($scope){
        console.log('help me');

        // Detact Mobile Browser
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
           angular.element('html').addClass('ismobile');
        }
    }]);