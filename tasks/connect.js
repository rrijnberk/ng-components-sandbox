(function () {
    var path = require('path');

        module.exports = function (grunt) {
        grunt.config.merge({
            connect: {
                options: {
                    port: 8080,
                    livereload: 35730,
                    hostname: '127.0.0.1'
                },
                dev: {
                    options: {
                        base: [
                            '<%= appConfig.src %>',
                            path.resolve('<%= appConfig.root %>', '../resource/config/'),
                            '<%= appConfig.tmp %>',
                            '<%= appConfig.root %>'
                        ],
                        open: true,
                        port: 8181
                    }
                },
                protractor: {
                    options: {
                        base: [
                            '<%= appConfig.src %>',
                            path.resolve('<%= appConfig.root %>', '../resource/config/'),
                            '<%= appConfig.tmp %>',
                            '<%= appConfig.root %>'
                        ],
                        port: 8282
                    }
                },
                dist: {
                    options: {
                        base: [
                            '<%= appConfig.build.dist %>',
                            '<%= appConfig.root %>../resource/config/',
                            '<%= appConfig.tmp %>'
                        ],
                        port: 8181,
                        open: true,
                        keepalive: true
                    }
                },
                coverage: {
                    options: {
                        base: [
                            '<%= appConfig.root %>results/coverage/unit/lcov-report/',
                        ],
                        port: 8282,
                        open: true,
                    }
                }
            }
        });
    }
}());