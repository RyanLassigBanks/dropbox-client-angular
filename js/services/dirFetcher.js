import dropboxToken from '../misc/secrets'

const dirFetcher = ['$http', function($http) {
   this.getDirectory = function(path) {
      return $http({
         method: 'POST',
         url: 'https://api.dropboxapi.com/2/files/list_folder',
         headers: {
            'Authorization' : `Bearer ${dropboxToken}`
         },
         data: {
            path,
            recursive: false
         }
      })
   }
}]

export default dirFetcher
