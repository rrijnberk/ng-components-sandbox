(function () {
    module.exports = function (grunt) {
        grunt.registerTask('serve', 'Compile then start a connect web server', function () {
            grunt.task.run([
                'ngtemplates',
                //'ngApimock',
                'connect:dev',
                'watch:dev'
            ]);
        });

        grunt.registerTask('serve:dist', 'Compile then start a connect web server', function () {
            grunt.task.run([
                //'ngApimock',
                'connect:dist'
            ]);
        });

        grunt.registerTask('serve:coverage', 'Compile then start a connect web server', function () {
            grunt.task.run([
                'connect:coverage',
                'watch:coverage'
            ]);
        });

        grunt.registerTask('serve:e2e', 'Compile then start a connect web server', function () {
            grunt.task.run([
                'connect:e2e'
            ]);
        });
    }
}());