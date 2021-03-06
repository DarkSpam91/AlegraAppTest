// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
(function (){
var app = angular.module('starter', ['ionic', 'starter.controllers'])



.run(function($ionicPlatform, $rootScope) {
  $rootScope.contacts = [];

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/contacts/create',
    views: {
      'menuContent': {
        templateUrl: 'templates/create_contact.html',
        controller:'CreateContact'
      }
    }
  })

  .state('app.info', {
      url: '/info',
      views: {
        'menuContent': {
          templateUrl: 'templates/info.html'
        }
      }
    })
    .state('app.contact', {
      url: '/contacts',
      views: {
        'menuContent': {
          templateUrl: 'templates/contact_list.html',
          controller: 'GetAllContacts'
        }
      }
    })

  .state('app.details', {
    url: '/contacts/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact_details.html',
        controller: 'GetDetailsContacts'
      }
    }
  }
  

);
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/contacts');
});

}());
