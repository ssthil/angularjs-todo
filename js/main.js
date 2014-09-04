var myApp = angular.module('myApp',[]);
	//Title controller
	myApp.controller('titleCtrl', function($scope){
		$scope.title ="Timestamp Manager";
	});
	// Main controller
	myApp.controller('mainCtrl', function($scope){
		//submit
		$scope.submitItem = function(){
			if($scope.todoForm.$valid){
			
			} else{
				$scope.submitted =true;
			}
		}
		$scope.date = new Date();
		$scope.listedItems=[];
		//Search
		$scope.searchSection = false;
		// Add new item
		$scope.listContainer = false;
		$scope.saveItem = function(){
	
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
			$scope.listContainer = true;
			$scope.searchSection = true;
		}
		//ng-show
		
		// Remove an item from scope
		$scope.removeItem = function(index){
			$scope.listedItems.splice(index, 1);
		}
		
	
	});

