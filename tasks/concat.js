(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.config.merge({
            concat: {
                default:{},
                production: {
                    src: [
                        '<%= appConfig.src %>/*.module.js',
                        '<%= appConfig.src %>/**/*.js',
                        '<%= appConfig.tmp %>/templates.js'
                    ],
                    dest: '<%= appConfig.build.dist %>/app.js'
                }
            }
        });
    };
}());