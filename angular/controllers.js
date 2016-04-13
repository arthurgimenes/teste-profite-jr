var app = angular.module("controllers", ['slick']);



/*******************************************************************************
*
*
*
*   Controller para os produtos
*
*
*
********************************************************************************/

app.controller("ProductsController", function($scope, $http) {
	$http.get('products.json').success(function(data) {
		$scope.products = data;
	})
	var width = window.innerWidth;
	if(width > 650) {
		$scope.slides = 4;
	} else {
		$scope.slides = 2;
	}
});
