(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.config.merge({
            uglify: {
                options: {
                    mangle: true,
                    sourceMap: true
                },
                default: {
                    files: {
                        '<%= appConfig.build.dist %>/app.min.js': '<%= appConfig.build.dist %>/app.js'
                    }
                }
            }
        });
    }
}());