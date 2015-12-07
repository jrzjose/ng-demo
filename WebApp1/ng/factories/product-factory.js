/**
 * This factory consumes the REST api
 */
appFactories.factory('productsApi', function ($http) {

    var api = '/api/products';

    var getAll = function () {
        return $http.get(api + '/');
    }

    var getById = function (id) {
        return $http.get(api + '?productID=' + id);
    }

    var addProduct = function (model) {
        return $http.post(api, model);
    };

    var updateProduct = function (model) { 
        return $http.put(api + '/' + model.ProductID, model);
    };

    var deleteProduct = function (id) {
        return $http.delete(api + '?productID=' + id);
    }

    return {
        getAll: getAll,
        getById: getById,
        addProduct: addProduct,
        updateProduct: updateProduct,
        deleteProduct: deleteProduct
    };
});