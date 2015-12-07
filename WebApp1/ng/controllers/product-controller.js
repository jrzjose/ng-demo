appControllers.controller('productsCtrlr', function ($scope, $location, $routeParams, productsApi, modelsApi, enumApi) {
    $scope.products = [];
    $scope.product = {};
    $scope.models = [];
    $scope.colors = enumApi.getColors();
    $scope.styles = enumApi.getStyles();

    $scope.init = function () {
        if ($routeParams.id) {
            productsApi.getById($routeParams.id).then(
                function (result) {
                    console.log(result);
                    $scope.product = result.data.Value;
                },
                function (error) {
                    alert('product not found!');
                }
            );
        }
        else {
            productsApi.getAll().then(
                function (result) {
                    $scope.products = result.data;
                },
                function (error) {
                }
            );
        }

        modelsApi.getAll().then(
            function (result) {
                $scope.models = result.data;
            },
            function (error) {
            }
        );
    }

    $scope.init();

    $scope.save = function () {
        if ($routeParams.id && $routeParams.id == "0") {
            productsApi.addProduct($scope.product).then(
                function (result) {
                    $location.path('/products/' + result.data);
                },
                function (error) {
                    alert('error adding the product');
                }
            );
        }
        else {
            productsApi.updateProduct($scope.product).then(
                function (result) {
                    //show a message to acknowledge the user the product has been saved.
                    alert('product has been saved');
                },
                function (error) {
                    console.log(error);
                    alert('error saving the product');
                }
            );
        }
    }

    $scope.cancel = function () {
        $location.path('/products/');
    }

    $scope.editProduct = function (p) {
        $location.path('/products/' + p.Value.ProductID);
    }
});

