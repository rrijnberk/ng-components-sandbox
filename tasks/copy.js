(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.config.merge({
            copy: {
                options: {
                    separator: '',
                    punctuation: ''
                },
                default: {
                    files: [
                        {
                            '<%= appConfig.build.dev %>/package.json': ['package.json']
                        },
                        {
                            cwd: '<%= appConfig.src %>',
                            dest: '<%= appConfig.build.dev %>',
                            expand: true,
                            src: ['**/*.html', '!**/*.template.html', '**/*.js']
                        }
                    ]
                },
                dist: {
                    files: {
                        '<%= appConfig.build.dist %>/package.json': ['package.json'],
                        '<%= appConfig.build.dist %>/component.css': ['<%= appConfig.src %>/styles/component.css']
                    }
                }
            }
        });
    }
}());