
(function() {
  function modalInstanceCtrl(Room, $uibModalInstance) {
    this.newRoomName;

    this.createRoom = function() {
      Room.createRoom(this.newRoomName, this.cancel);
    }

    this.cancel = function () {
      $uibModalInstance.dismiss();
    };

  }

  angular
      .module('blocChat')
      .controller('modalInstanceCtrl',['Room','$uibModalInstance', modalInstanceCtrl]);

})();