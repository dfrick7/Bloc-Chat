(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    
    var addRoom = function(newRoom) {
        rooms.$add(newRoom);
    };

    return {
        all: rooms,
        addRoom: addRoom
    };
  }
 angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
