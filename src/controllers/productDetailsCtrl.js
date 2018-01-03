angular.module('assessment').controller('productDetailsCtrl', function($scope,  $stateParams, shopService){
    
    
    shopService.getDetails($stateParams.id).then((res) => {
        console.log(res.data)
        $scope.details = res.data
    })
    
    

})