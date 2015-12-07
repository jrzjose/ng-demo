var appFactories = angular.module('app.factories', []);

appFactories.factory('modelsApi', function ($http) {

    var api = '/api/models';

    var getAll = function () {
        return $http.get(api + '/');
    }

    return {
        getAll: getAll
    };
});