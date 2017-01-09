import angular from 'angular'
import angularRoute from 'angular-route'
import fileListController from './controllers/fileListController'
import dirFetcher from './services/dirFetcher'

angular.module('app', ['ngRoute'])
   .controller('fileListController', fileListController)
   .service('dirFetcher', dirFetcher)

   .config(['$routeProvider', "$locationProvider", function($routeProvider, $locationProvider) {
      $routeProvider
         .when(':filepath*', {
            controller: "fileListController",
            templateUrl: "views/fileList.html"
         })
         .otherwise({
            redirectTo: '/'
         })
      $locationProvider.html5Mode(true)
   }])
