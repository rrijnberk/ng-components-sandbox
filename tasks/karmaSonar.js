(function () {
    'use strict';

    module.exports = function (grunt) {
        var packageConfig = grunt.file.readJSON('package.json');

        grunt.registerTask('sonar', function () {
            grunt.task.run([
                'karma',
                'karmaSonar:app'
            ]);
        });

            grunt.config.merge({
            karmaSonar: {
                options: {
                    defaultOutputDir: '<%= appConfig.tmp %>/sonar/custom_options/',
                    instance: {
                        hostUrl : 'http://app315.svb.org:9000/',
                        login: 'SA_Java_Jenkins',
                        password: 'password'
                    }
                },
                app: {
                    project: {
                        key: packageConfig.name,
                        name: 'dpgb-js:'+packageConfig.name,
                        version: packageConfig.version
                    },
                    paths: [
                        {
                            cwd: './',
                            src: 'src',
                            test: 'test',
                            reports: {
                                unit: 'results/reports/unit/report.xml',
                                coverage: 'results/coverage/unit/lcov.info'
                            }
                        }
                    ]
                }

            }
        });
    }
}());