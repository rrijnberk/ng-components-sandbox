(function() {
    'use strict';


    var SandBoxComponent = {
        controller: SandBoxController,
        controllerAs: 'ctrl',
        templateUrl: '/src/app/sandbox/sandbox.template.html'
    };

    function SandBoxController(){
        var vm = this;

        console.log('Sandbox component loaded');

        vm.loaded = 'succes';
    }

    angular
        .module('ng.components.sandbox')
        .component('sandBox', SandBoxComponent);
}());
