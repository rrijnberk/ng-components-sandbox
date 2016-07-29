(function() {
    'use strict';

    function SandBoxPO(container) {
        this.container = container;
    }

    SandBoxPO.prototype = Object.create({}, {
        isPresent: {
            value: function() {
                return this.container.isPresent();
            }
        }
    });

    module.exports = SandBoxPO;
}());