(function () {
    'use strict';

    module.exports = function (grunt) {
        var timeStamp = grunt.template.today('yyyymmddHHMM'),
            version = grunt.file.readJSON('package.json').version;

        grunt.config.merge({
            compress: {
                main: {
                    options: {
                        mode: 'zip',
                        archive: '<%= appConfig.module %>-v' + version + '_'+ timeStamp + '.zip'
                    },
                    expand: true,
                    cwd: 'build/dist/',
                    src: ['**/*'],
                    dest: 'build/archive'
                }
            }
        });
    }
}());