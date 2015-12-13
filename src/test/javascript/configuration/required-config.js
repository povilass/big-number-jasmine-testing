require.config({
    //baseUrl : "/js",
    paths: {
        'jquery' : "/lib/jquery",
        'angular' : "/lib/angular",
        'angular-mocks' : "/lib/angular-mocks",
        'big-number' : "/lib/bignumber",
        'providers' : "/app/providers",
        'permutation-helper' : "/misc/permutation-helper"
    },

    shim: {
        'angular' : {
            deps : ['jquery'],
            exports: 'angular'
        },
        'angular-mocks' : {
            deps : ['angular']
        },
        'providers' : {
            deps : ['big-number']
        }
    }
});
