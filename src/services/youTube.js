angular.module('video-player')
  .service('youTube', function($http) {
    this.getData = function (query, callback) {
      console.log(query);
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: query,
          key: 'AIzaSyDoU5CtvdDD2mU2NsK1OQd1dnae2BXTSS4',
          type: 'video',
          videoEmbeddable: true,
          part: 'snippet',
          maxResults: 5
        },
      }).then(function(response) {
        callback(response);
      });  
    };
  });
