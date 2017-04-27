(function() {
    function chatCtrl($scope, $uibModal, Room, Message) {
        $scope.rooms = Room.all;
        $scope.chatty = "Bloc Chat";
        $scope.messages = [];
        $scope.open = function() {
            var modalInstance = $uibModal.open({
              controller: 'ModalInstanceCtrl',
              templateUrl: '/templates/roomModal.html',
            });

            modalInstance.result.then(function(name) {
                Room.addRoom(name);
            });
        };
        $scope.selectRoom = function(roomId) {
          $scope.messages = Message.getByRoomId(roomId);
          console.log($scope.messages);
        };
    }

    angular
        .module('blocChat')
        .controller('chatCtrl', ['$scope', '$uibModal', 'Room', 'Message', chatCtrl]);
})();
