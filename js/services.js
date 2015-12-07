jarvisApp

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