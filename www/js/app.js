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
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "facts.html"
        }
      }
    })
    .state('tabs.classes', {
      url: "/classes",
      views: {
        'classes-tab': {
          templateUrl: "classes.html"
        }
      }
    })
    .state('tabs.map', {
      url: "/map",
      views: {
        'map-tab': {
          templateUrl: "map.html"
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
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "nav-stack.html"
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
    })
    .state('tabs.filter', {
      url: "/filter",
      views: {
        'filter-tab': {
          templateUrl: "filter.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/entry");

});