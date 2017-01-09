const MainController = ['$scope', '$location', function($scope, $location) {
   $scope.path = $location.$$path.split('/')
}]

export default MainController
