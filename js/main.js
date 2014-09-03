var myApp = angular.module('myApp',[]);
	//Title controller
	myApp.controller('titleCtrl', function($scope){
		$scope.title ="Timestamp Manager";
	});
	// Main controller
	myApp.controller('mainCtrl', function($scope){
		$scope.date = new Date();
		$scope.listedItems=[];
		//$scope.listedItems = (localStorage.getItem('listedItems')!==null) ? JSON.parse($scope.saved) : [ 
		//{caption: 'Learn AngularJS', description: 'this is first'}, 
		//{caption: 'Build an Angular app', description: 'this is last'} ];
		$scope.save = function(){
		//if($scope.captionInput !='' && $scope.descriptionInput !=''){
		var newCaption = $scope.list.captionInput.trim();
		var newDescription = $scope.list.descriptionInput.trim();
			if (!newCaption.length && !newDescription.length) {
				return;
			}
			$scope.listedItems.push({
				'caption':$scope.list.captionInput,
				'description':$scope.list.descriptionInput
			});
		
			// Clear input fields after push
			$scope.list.captionInput = "";
			$scope.list.descriptionInput ="";
		}
		
	});

