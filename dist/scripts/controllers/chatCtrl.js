(function() {
    function chatCtrl(Room, $scope){
        this.rooms = Room.all;
        $scope.chatty = "Chat Rooms";
        
        this.open = function() {
            var modalInstance = $uibModal.open({
              templateUrl: '/templates/roomModal.html',
              controller: 'modalInstanceCtrl as modal',
            });
        }
    }
    
    angular
        .module('blocChat')
        .controller('chatCtrl', ['Room', '$scope', chatCtrl]);
})();