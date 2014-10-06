angular.module('seedApp', ['ionic', 'seedApp.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('search', {
      url: '/search',
      templateUrl: 'search.html'
    })
    .state('entry', {
      url: '/entry',
      templateUrl: 'entry.html'
    })
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.addPost', {
      url: "/addPost",
      views: {
        'home-tab': {
          templateUrl: "addPost.html"
        }
      }
    })
    .state('tabs.classes', {
      url: "/classes",
      views: {
        'classes-tab': {
          templateUrl: "classes.html",
          controller: 'ClassesTabCtrl'
        }
      }
    })
    .state('tabs.addClass', {
      url: "/addClass",
      views: {
        'classes-tab': {
          templateUrl: "addClass.html"
        }
      }
    })
    .state('tabs.map', {
      url: "/map",
      views: {
        'map-tab': {
          templateUrl: "map.html",
          controller: 'MapTabCtrl'
        }
      }
    })
    .state('tabs.host', {
      url: "/host",
      views: {
        'map-tab': {
          templateUrl: "host.html"
        }
      }
    })
    .state('tabs.profile', {
      url: "/profile",
      views: {
        'profile-tab': {
          templateUrl: "profile.html"
        }
      }
    })
    .state('tabs.settings', {
      url: "/settings",
      views: {
        'profile-tab': {
          templateUrl: "settings.html"
        }
      }
    })
    .state('tabs.search', {
      url: "/search",
      views: {
        'search-tab': {
          templateUrl: "search.html"
        }
      }
    });

   $urlRouterProvider.otherwise("/entry");

});