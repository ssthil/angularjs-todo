var App = angular.module("App", []);
App.controller('titleCtrl', function($scope){
		$scope.title ="Timestamp Manager";
	});

App.controller("MyController", function ($scope) {
    $scope.names = [];

    $scope.AddName = function () {
        $scope.names.push({
            first: $scope.Namer.name
        });
    };
});