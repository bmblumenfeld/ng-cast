angular.module('video-player')
  .component('videoListEntry', {
    bindings: { 
      video: '<',
      index: '<'
    },
    
    controller: function ($rootScope) {
      this.handleClick = () => {
        $rootScope.$emit('titleClick', this.index);   
      };  
    },
    
    templateUrl: 'src/templates/videoListEntry.html'
  });
