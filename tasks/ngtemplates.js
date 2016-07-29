    (function () {
        module.exports = function (grunt) {
            var config = {
                ngtemplates: {
                    options: {
                        prefix: '/core/',
                        htmlmin: {
                            removeComments: true,
                            collapseWhitespace: true
                        }
                    },
                    'dpgb.core.components': {
                        cwd: '<%= appConfig.src %>/',
                        dest: '<%= appConfig.tmp %>/templates.js',
                        src: [
                            'components/**/*.html'
                        ]
                    }
                }
            };

            grunt.config.merge(config);
        };
    }());