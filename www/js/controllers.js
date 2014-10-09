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

/*get the days from the time service and set them to scope variables*/
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

 app.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      function initialize() {
        var myLatlng = new google.maps.LatLng(38.921622,-77.042659);

        /*define extra markers*/
        var sakuramen = new google.maps.LatLng(38.921605,-77.042015);
        var roofersUnion = new google.maps.LatLng(38.9218575,-77.0426306);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Home!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        /*place markers on map by calling placeMarker*/
      placeMarker(sakuramen);
      placeMarker(roofersUnion);

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        function placeMarker(location) {
          var marker = new google.maps.Marker({
              position: location,
              map: map
          });
        }

         google.maps.event.addListener(map, 'click', function(event) {
            placeMarker(event.latLng);
          });

        $scope.map = map;
      }
      ionic.Platform.ready(initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click');
      };
      
    });