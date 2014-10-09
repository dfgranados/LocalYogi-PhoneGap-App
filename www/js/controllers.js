var app = angular.module('seedApp.controllers', ['classDataService', 'dateTimeService', 'personDataService']);

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



app.controller('ClassesTabCtrl', function($scope, classesFactory, dateTimeFactory, personFactory) {
  $scope.yClass = classesFactory.all();

    $scope.classSearchFilter = function (yClass) {
      teacherName = $scope.getClassTeacher(yClass.id);
    var keyword = new RegExp($scope.classFilter, 'i');
        return !$scope.classFilter || keyword.test(teacherName) || keyword.test(yClass.location);
    };

    $scope.getClassTeacher = function(teacherId){
      teacher = personFactory.get(teacherId);
      return teacher.Person.firstName + " " + teacher.Person.lastName;
    };

      $scope.dayAsText = dateTimeFactory.dayAsText;

      $scope.currentMonth = dateTimeFactory.currentMonth;

      $scope.currentDay = dateTimeFactory.currentDay;

      $scope.repeatQ = function(n)
      {
        return new Array(n);
      };
});

app.controller('MapTabCtrl', function($scope) {

});

app.controller('MapTabCtrl', function($scope) {

});

app.controller('ProfileTabCtrl', function($scope) {
});

app.directive("menu-icon", function () {
  return {
    restrict: "E",
    templateU: 'menu-icon.html'
  };
});


app.controller('searchController', function($scope, personFactory) {
        $scope.personList = personFactory.all();
        $scope.searchFilter = function (person) {
        var keyword = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || keyword.test(person.Person.firstName) || keyword.test(person.Person.lastName);
    };
});


