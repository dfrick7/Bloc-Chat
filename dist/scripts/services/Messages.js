(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);
    return {
      getByRoomId: function (roomId) {
        console.log(roomId);
          var roomRef = ref.orderByChild('roomId').equalTo(roomId);
          var messages = $firebaseArray(roomRef);
          return messages;
      }
    };
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
