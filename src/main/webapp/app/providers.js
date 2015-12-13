define(['angular', 'big-number'], function (angular, bigNumber) {
    var module = angular.module("corpProviders", []);

    module.provider("CustomBigNumber", function() {
        bigNumber.config({ DECIMAL_PLACES: 10, FORMAT :{
            decimalSeparator: window.decimalSeparator,
            groupSeparator: window.groupSeparator,
            groupSize : 3,
        } })
        this.$get = function() {
            return bigNumber;
        }
    });

    return module;
});