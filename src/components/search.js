angular.module('video-player')

  .component('search', {
    controller: function ($rootScope) {
      this.searchVal = '';
      this.emitSearch = () => {
        console.log('triggered');
        $rootScope.$emit('handleSearch', this.searchVal);
      };
      this.emitSearch = _.debounce(this.emitSearch, 500);
      this.handleClick = () => {
        console.log('Search clicked with value: ' + this.searchVal);
        $rootScope.$emit('handleSearch', this.searchVal);  
        this.searchVal = ''; 
      };
      this.keyPress = (event) => {
        if (event.keyCode === 13) {
          $rootScope.$emit('handleSearch', this.searchVal);
          this.searchVal = '';
        }
        // } else if (this.searchVal.length > 0) {
        //   this.emitSearch();
        // }
      };
    },
    templateUrl: 'src/templates/search.html'
  });
