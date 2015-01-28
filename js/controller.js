var controllers = angular.module('controllers',[]);

controllers.controller('Sample1Ctrl',['$scope', '$http', function($scope, $http){
	
}]);

controllers.controller('Sample2Ctrl',['$scope', '$http', function($scope, $http){
	
}]);

controllers.controller('Sample3Ctrl',['$scope', '$http', function($scope, $http){
	
}]);


controllers.controller('ContactCtrl',['$scope', '$http', function($scope, $http){
	$scope.isPost = false;
	$scope.post = function(){
		$scope.isPost = true;
		if($scope.userInfo.$invalid){
			return;
		}else{
			alert("送信しました！");
		}
	};
}]);



