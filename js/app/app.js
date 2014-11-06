var App = angular.module('OpenBox', []);

App.controller("resultGrid", function($scope,$http) {
	$http.get("https://api.github.com/search/repositories?q=js&sort=stars&order=desc")
    .success(function(response) {
    	$scope.items = response.items;
    });
});

App.controller("Search",function($scope,$http){
    $http.get("https://api.github.com/gitignore/templates")
    .success(function(response){
    	$scope.langs = response;
    	$scope.q="js";
    	ImageLoader();
    });
});


function ImageLoader(){
	var 
	loader_img="asserts/img/loader.gif";
	var avatar_imgs=document.querySelectorAll(".avatar_img");
	for (var i = 0; i < avatar_imgs.length; i++) {
		console.log(avatar_imgs[i]);	
	};
	
}