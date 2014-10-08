var app = angular.module('seedApp.controllers', ['classDataService', 'dateTimeService']);

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



app.controller('ClassesTabCtrl', function($scope, classesFactory, dateTimeFactory) {
  $scope.yClass = classesFactory.all();

  $scope.dayAsText = dateTimeFactory.dayAsText;

  $scope.currentMonth = dateTimeFactory.currentMonth;

  $scope.currentDay = dateTimeFactory.currentDay;
  

$scope.classSearchFilter = function (yClass) {
    var keyword = new RegExp($scope.classFilter, 'i');
    return !$scope.classFilter || keyword.test(yClass.location) || keyword.test(yClass.yogaType) || keyword.test(yClass.teacher) ;
};

  $scope.repeatQ = function(n)
  {
    return new Array(n);
  };
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


app.controller('searchController', function($scope) {
    $scope.personList = [
      {
          Person: {
              firstName: 'Paula',
              familyName: 'Pavlova'
          },
          location: "DC",
          Constructors: [
              {name: "teacher"}
          ]
      },
       {
          Person: {
              firstName: 'Dan',
              familyName: 'Granados'
          },
          location: "Austin",
          Constructors: [
              {name: "student"}
          ]
      },
      {
          Person: {
          firstName: 'Diplo',
              familyName: 'Pavlov'
          },
          location: "LA",
          Constructors: [
              {name: "puppy"}
          ]
      }
    ];
    $scope.searchFilter = function (person) {
    var keyword = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || keyword.test(person.Person.givenName) || keyword.test(person.Person.familyName);
};
});


