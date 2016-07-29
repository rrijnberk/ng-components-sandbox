module.exports = function(config) {
    config.set({
        basePath: './',
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-*/angular-*.js',
            'node_modules/moment/moment.js',
            'src/app/*.module.js',
            'src/app/*.js',
            'src/app/**/*.js',
            'src/app/**/*.(!components).js',
            'test/unit/**/*.spec.js'
        ],

        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],

        // coverage reporter generates the coverage
        reporters: ['junit', 'coverage', 'progress'],

        // the default configuration
        junitReporter: {
            outputDir: './results/reports/unit',
            outputFile: 'report.xml',
            useBrowserName: false
        },

        preprocessors: {
            './src/**/*.js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            dir : 'results/coverage/unit',
            reporters: [
                { type: 'lcov', subdir: '/' }
            ]
        }
    });
};
