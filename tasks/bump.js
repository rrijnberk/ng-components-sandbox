(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.config.merge({
            bump: {
                options: {
                    files: ['package.json'],
                    commit: false
                }
            }
        });
    }
}());