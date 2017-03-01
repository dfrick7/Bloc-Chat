(function() {
    function chatCtrl($scope, $uibModal, Room) {
        
        $scope.rooms = Room.all;
        $scope.chatty = "Bloc Chat";
        $scope.chitChat = "Rooms";
    
        $scope.open = function() {
            var modalInstance = $uibModal.open({
              controller: 'ModalInstanceCtrl',
              templateUrl: '/templates/roomModal.html',
            });
            
            modalInstance.result.then(function(name) {
                Room.addRoom(name);
            });
        };
        
    }
    
    angular
        .module('blocChat')
        .controller('chatCtrl', ['$scope', '$uibModal', 'Room', chatCtrl]);
})();