(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};

    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);


    return {
      getByRoomId: function (roomId) {
        console.log(roomId);
          var roomRef = ref.orderByChild('roomId').equalTo(roomId);
          var messages = $firebaseArray(roomRef);
          return messages;
      },

      send: function (newMessage, roomId) {
        console.log(newMessage, roomId)
        var message = {
          username: $cookies.get('blocChatCurrentUser'),
          content: newMessage,
          sentAt: (new Date()).toString(),
          roomId: roomId
        }
        messages.$add(message);
      }
    };
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
