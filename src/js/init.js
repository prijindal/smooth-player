var Module = angular.module('music.app',['ui.router'])

Module.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('home',{
    url:'/',
    template:'<home-page home="{{home}}"></home-page>',
    controller:'homeController as home'
  })
})

Module.controller('appController', function($scope, $timeout, $http) {
  var self = this

  // Make a service for this
  tracks = [{title:'Title',artist:'Artist',pivot:0,total:300},{title:'Title2',artist:'Artist2',pivot:0,total:145}]
  self.track = tracks[0]
  var start = Date.now()
  var moveTrackPivot = function() {
    $timeout(function() {
      if(self.track.pivot > self.track.total){
         self.track = tracks[parseInt(Math.random()*1000)%2];
         self.track.pivot = 0
      }
      moveTrackPivot()
      self.track.pivot+=1
    },1000)
  }
  moveTrackPivot()

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
