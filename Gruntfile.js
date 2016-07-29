(function (){
    'use strict';

    var path = require('path'),
        root = path.resolve('./'),
        build = path.resolve(root, 'build'),
        results = path.resolve(root, 'results'),
        coverage = path.resolve(results, 'coverage'),
        reports = path.resolve(results, 'reports');

    module.exports = function (grunt) {
        // Load grunt tasks automatically
        require('load-grunt-tasks')(grunt);
        require('connect-livereload')();

        grunt.initConfig({
            appConfig : {
                build: {
                    root: build,
                    dev: path.resolve(build, 'dev'),
                    dist: path.resolve(build, 'dist'),
                },
                coverage: {
                    root: coverage,
                    unit: path.resolve(coverage, 'unit')
                },
                mocks: path.resolve(root, 'resource', 'mocks'),
                module: 'dpgb.core.components',
                reports: {
                    root: reports,
                    unit: path.resolve(reports, 'unit')
                },
                src: path.resolve(root, 'src', 'app'),
                tmp: path.resolve(root, 'tmp')
            }
        });

        // Load tasks from ./tasks folder
        grunt.loadTasks('tasks');
    };
}());
