angular.module('Profite', [])
  .controller('ProductController', ProductController)
  .service('ProductService', ProductService);

function ProductController($scope, ProductService) {

  function success(obj) {
    $scope.products = obj.data;

  }

  function error(err) {
    console.log('Error: ', err);
  }

  ProductService.getProducts()
    .then(success, error);

  $scope.calcParcel = function(price, parcel) {
    var total = 0;

    total = price / parcel;

    return total;

  };

}

function ProductService($http) {
  var REQ = {
    url: 'assets/javascript/json/products.json',
    method: 'GET'

  };

  this.getProducts = function() {
    return $http(REQ);
  };

}

ProductController.$inject = ['$scope', 'ProductService'];
ProductService.$inject = ['$http'];
