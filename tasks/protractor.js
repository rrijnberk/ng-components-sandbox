(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.config.merge({
            protractor: {
                options: {
                    configFile: "protractor.conf.js",
                    keepAlive: true,
                    noColor: false,
                },
                dev: {
                    options: {}
                },
            }
        });
    };
}());