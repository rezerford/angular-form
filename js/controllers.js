(function () {
	var scrumApp = angular.module('scrumApp', ['ui.bootstrap']);

	scrumApp.controller('FormCtrl', ['$scope', '$log', function ($scope, $log) {
	  $scope.getCssClasses = function(ngModelController){
	  	return {
	  		'has-error': ngModelController.$invalid && ngModelController.$dirty,
	  		'has-success': ngModelController.$valid && ngModelController.$dirty
	  	}
	  };

	  $scope.showError = function(ngModelController, error){
	  	return ngModelController.$error[error];
	  };

	  $scope.canSave = function(){
	  	return $scope.userInfoForm.$dirty && $scope.userInfoForm.$valid && $scope.checkPasswords();
	  };

	  $scope.checkPasswords = function(){
	  	return $scope.userInfoForm.password.$modelValue === $scope.userInfoForm.repeatPassword.$modelValue;
	  };
	}]);
}());