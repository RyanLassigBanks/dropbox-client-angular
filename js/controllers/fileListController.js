import dirFetcher from '../services/dirFetcher'

function fileListController($scope, $routeParams, $location, dirFetcher) {
   let path = $location.$$path === '/' ? '' : $location.$$path
   dirFetcher
      .getDirectory(path)
      .then(res => res.data)
      .then(data => {
         $scope.directories = data.entries
         $scope.path = path.split('/')
      })
}

export default ['$scope', '$routeParams', '$location','dirFetcher', fileListController]
