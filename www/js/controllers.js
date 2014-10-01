var app = angular.module('seedApp.controllers', []);

app.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
});

app.controller('HomeTabCtrl', function($scope) {
});


app.directive("menu-icon", function () {
  return {
    restrict: "E",
    templateU: 'menu-icon.html'
  };
});
