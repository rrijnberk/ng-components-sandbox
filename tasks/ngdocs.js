(function () {
    module.exports = function (grunt) {
        grunt.config.merge({
            ngdocs: {
                options: {
                    dest: 'build/docs',
                    scripts: ['angular.js'],
                    html5Mode: true,
                    startPage: '/api',
                    title: "<%= appConfig.module %>",
                    titleLink: "/services",
                    inlinePartials: true,
                    bestMatch: true
                },
                api: {
                    src: ['src/**/*.js'],
                    title: 'DPGB Core Services Documentation'
                }
            }

        });
    };
}());