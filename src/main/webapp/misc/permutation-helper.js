define(function () {
    'use strict';
    var PermutationUtil = function() {
    };

    var getPermutations = function(array, size, initial, output) {
        if (initial.length >= size) {
            output.push(initial);
        } else {
            var i;

            for (i = 0; i < array.length; ++i) {
                getPermutations(array, size, initial.concat(array[i]), output);
            }
        }
    }

    PermutationUtil.getPermutations = function(array, size) {
        var output = [];
        getPermutations(array, size, [], output);
        return output;
    }

    PermutationUtil.getModifiedPermutations = function(params, modifyFn) {
        var permutationsOf = params.permutationsOf ? params.permutationsOf : [0, 1],
            size = params.size ? params.size : 2;

        var output = PermutationUtil.getPermutations(permutationsOf, size);
        if(typeof modifyFn === 'function') {
            for (var i = 0; i < output.length; i++) {
                modifyFn(output[i]);
            }
        }
        return output;
    }

    return PermutationUtil;
});