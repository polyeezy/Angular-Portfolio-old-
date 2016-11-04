angular.module('app').controller('socialController', ['$scope', '$http', function($scope, $http){

$http.get('https://api.tumblr.com/v2/blog/polyeezy.tumblr.com/posts/photo?api_key=oUzundCe9QuXOW1dcdEp63UGwyyPbs2G30kAz1r3hy1Os36LVy&limit=1')
.then(function(response) {
    $scope.TumblrImg = response.data.response.posts[0].photos[0].alt_sizes[0].url;
    $scope.TumblrPostUrl = response.data.response.posts[0].short_url;
    $scope.TumblrBlogUrl = response.data.response.blog.url;
})
.catch(function(err){
  $scope.TumblrImg = "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-error-icon.png";
});

$http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=45571980.1677ed0.f524f48f8e1e4873b30f1c4e140065f1',
{
  headers: {
    'Host' : 'api.instagram.com'
  }

}).then(function(response) {
$scope.InstagramPostUrl = response.data.data[0].link;
$scope.InstagramPostLikesCount = response.data.data[0].likes.count;
$scope.InstagramPostImgUrl =  response.data.data[0].images.standard_resolution.url;
})
.catch(function(err){
  $scope.InstagramPostImgUrl = "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-error-icon.png";
});

$http.get('https://api.twitter.com/1.1/statuses/user_timeline.json?count=1&screen_name=polyeezy',
{
  headers: {
    "content-type": "jsonp",
     "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAP2wxgAAAAAAAjPskLrcxbu9tWdRtHlaNwwa5Dg%3DfdvvMasWxvz2diPr5hY40flMZynjKNqsjE6UrAbMcSriyPXGEM",
     "cache-control": "no-cache",
     'Access-Control-Allow-Origin': '*'
   }
}).then(function(response){
  console.log('ok');
 })
 .catch(function(err){
   $scope.TwitterImg = "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-error-icon.png";
 });





}]);
