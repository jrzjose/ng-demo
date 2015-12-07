appFactories.factory('enumApi', function ($http) {

    var getColors = function () {
        return ["Other", "Blue", "Yellow", "Green", "Red", "White", "Black"];
    }

    var getStyles = function () {
        return [{ Id: "W", Name: "Women's" }, { Id: "W", Name: "Men's" }, { Id: "W", Name: "Universal" }];
    }

    return {
        getColors: getColors,
        getStyles: getStyles
    };
});