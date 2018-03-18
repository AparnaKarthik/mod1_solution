(function(){
	'use strict';
angular.module('lunchCheck', [])
.controller('lunchCheckController', lunchCheckController);
lunchCheckController.$inject=['$scope']
  function lunchCheckController($scope) {
  $scope.lunchMenu = [];
  $scope.totalValue = 0;
  $scope.Message="";
$scope.comma = ",";
  $scope.checkLun = function () {
   if($scope.lunchMenu=="")
   {$scope.Message = "Please enter data first!";}
  else{
    var lunchMenuNo = splitString($scope.lunchMenu,$scope.comma);
    $scope.totalValue = lunchMenuNo;
	//$scope.Message= displayMessage;
	if(lunchMenuNo<=3)
	{
	
$scope.Message = "Enjoy!";
	
	}
	else
	{
	$scope.Message= "Too much!";	
	}
  }
  };


  function splitString(stringToSplit, separator)  {
    var arrayOfStrings = stringToSplit.split(separator);
   var totalStringValue = arrayOfStrings.length;
   return totalStringValue;
  }
  
}
})();
