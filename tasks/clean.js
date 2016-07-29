(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.config.merge({
            clean: {
                build: {
                    src: '<%= appConfig.build.root %>'
                },
                results: {
                    src: 'results'
                },
                tmp: {
                    src: 'tmp'
                }
            }
        });
    }
}());