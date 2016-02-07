var Module = angular.module('music.app',['ui.router'])

Module.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('home',{
    url:'/',
    templateUrl:'pages/home/home.page.html'
  })
})

Module.controller('appController', function($scope, $http) {
  var self = this

  // Make a service for this
  self.track = {title:'Title'}

  // Make a service for this
  $http.get('./json/sidemenu.json')
    .then(function(response) {
      self.sidemenu = response.data
    })

  // Make a service
  $http.get('./json/menubar.json')
    .then(function(response) {
      self.menubar = response.data
    })
})
