angular.module('assessment').service('shopService', function($http){
    
    this.getProducts = () => $http.get('https://practiceapi.devmountain.com/products')


    this.getDetails = function(id){
        return $http.get('https://practiceapi.devmountain.com/products/' + id)
      }

    
    this.getTest = 'service test'

})