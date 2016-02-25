// import { fs } from 'fs';
require('angular');

import controller from './controller/config.js';
import service from './service/config.js';
import language from './language/config.js';



var app = angular
  .module('task-frontend', [
    require('angular-ui-router'),
    require('angular-translate')
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $translateProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: "/",
        views: {
          "header": { 
            template: require('html!./controller/header/templates/header.html'),
            controller: 'headerController'
          },
          "content": {
            template: require('html!./controller/ssh/templates/ssh.html'),
            controller: 'sshController'
          }
        }
      })
      .state('home.install', {
        url: "config",
        views: {
          "content@": {
            template: require('html!./controller/install/templates/installLocal.html'),
            controller: 'installLocalController'
          }
        }
      });
      
      
    // load language
    for(var lang in language){
      $translateProvider.translations(lang, language[lang].default);
    }
    $translateProvider.preferredLanguage('en');
  }]);


// Load service
var i = service.length - 1;
while(-1 < i){
  app.factory(service[i].name, service[i].service);
  i--;
}

// Load controller
var i = controller.length - 1;
while(-1 < i){
  app.controller(controller[i].name, controller[i].controller);
  i--;
}


