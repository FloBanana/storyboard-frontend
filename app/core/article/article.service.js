'use strict';

angular.
  module('core.article').
  factory('ArticleService', function ($rootScope, $window, $http, $q) {
       return {
           getArticles: function getArticles() {
             return $http.get('http://storyboard.floatec.de/article/');
         },
         createArticle: function createArticle(title, notes, deadline) {
           return $http.post('http://storyboard.floatec.de/article/', {"title": title, "notes": notes, "deadline": deadline});
         }
       };
  });



  /*
  participates: function(eventId){
        return $http.get($rootScope.API_URL + '/participants/participates?accountId=' + $window.localStorage['user_id'] + '&eventId=' + eventId + '&access_token=' + $window.localStorage['access_token']);
      },
      join: function(eventId){
        return $http.post($rootScope.API_URL + "/events/join?access_token=" + $window.localStorage['access_token'], {"accountId": $window.localStorage['user_id'],"eventId": eventId});
      },
      leave: function(eventId){
        return $http.delete($rootScope.API_URL + "/events/" + eventId + "/accounts/rel/" + $window.localStorage['user_id'] + "?access_token=" + $window.localStorage['access_token']);
      },

      */
