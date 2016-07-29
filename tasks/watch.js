(function (){
    'use strict';

    module.exports = function(grunt) {
        grunt.config.merge({
            watch: {
                options: {
                    livereload: 35730
                },
                dev: {
                    files: ['<%= appConfig.src %>/**/*']
                },
                coverage: {
                    files: ['<%= appConfig.root %>results/*', '<%= appConfig.root %>results/**/*']
                }
            }
        });
    }
}());