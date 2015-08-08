var app = angular.module("gitHub");

app.controller("mainC", function($scope, githubService) {
	$scope.blah = "Bob Loblaw";

	$scope.user = {};

	$scope.searchText = "DevMountain";

	$scope.getUserData = function() {
		githubService.getUser($scope.searchText).then(function(res) {
			$scope.user = res.data;
		});
	};

	$scope.getUserData();

});