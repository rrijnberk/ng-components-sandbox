(function () {
    'use strict';

    module.exports = function (grunt) {
        var tasks = [
            'build \t[ default | production ] \t(build the app)',
            'karma \t\t\t\t\t(run unit tests)',
            'protractor \t\t\t\t\t(run protractor test)',
            'serve \t[ default | production ] \t(build and run the app)',
            'sonar \t\t\t\t\t(run unit and protractor tests and send results to sonarQube for analysis)'
        ];

        function writeTask(task){
            grunt.log.writeln('- ' + task);
        }

        grunt.registerTask('default', function () {
            grunt.log.writeln('The following tasks are available to you');
            tasks
                .sort()
                .map(writeTask);
        });
    }
}());