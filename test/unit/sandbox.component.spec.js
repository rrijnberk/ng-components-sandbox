/**
 * Created by rrijnberk on 29/07/16.
 */
describe('The sandbox component ', function() {
    var $componentController;

    //you need to indicate your module in a test
    beforeEach(module('ng.components.sandbox'));

    beforeEach(inject(function(_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('controller should be loaded', function (){
        var ctrl = $componentController('sandBox', null, {});
        expect(ctrl).toBeDefined();
    })

    it('controller should be loaded with test flag', function (){
        var ctrl = $componentController('sandBox', null, {});
        expect(ctrl.loaded).toBe('succes');
    })

});