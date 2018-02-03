angular.module('video-player')

  .component('app', {
    controller: function ($rootScope, youTube) {
      this.data = window.exampleVideoData; 
      this.index = 0;
      $rootScope.$on('titleClick', (event, index) => {
        this.index = index;
      });
      $rootScope.$on('handleSearch', (event, query)=> {
        youTube.getData(query, this.handleSearch);
      });
      this.handleSearch = (response) => {
        this.data = response.data.items;
      };
      youTube.getData('cats', this.handleSearch);
    },
    templateUrl: 'src/templates/app.html'
  });

