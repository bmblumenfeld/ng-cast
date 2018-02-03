angular.module('video-player')

  .component('app', {
    controller: function ($rootScope) {
      this.data = window.exampleVideoData; 
      this.index = 0;
      $rootScope.$on('titleClick', (event, index) => {
        this.index = index;
      });
    },
    templateUrl: 'src/templates/app.html'
  });
