angular.module('seedApp', ['ionic', 'seedApp.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('search', {
      url: '/search',
      templateUrl: 'search.html'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'settings.html'
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
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "facts2.html"
        }
      }
    })
    .state('tabs.myClasses', {
      url: "/myClasses",
      views: {
        'myClasses-tab': {
          templateUrl: "myClasses.html"
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