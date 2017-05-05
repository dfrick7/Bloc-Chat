
(function() {
    function UserModalCtrl($scope, $cookies, $uibModalInstance){
      $scope.setUser = function () {
          if(!$scope.newuser || $scope.newuser == " "){
              alert("Need username");
          } else {
              var newuser = $scope.newuser
              $cookies.put('blocChatCurrentUser', newuser);
              $uibModalInstance.close();
          }
      };
  }

    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$scope', '$cookies', '$uibModalInstance', UserModalCtrl])
})();
