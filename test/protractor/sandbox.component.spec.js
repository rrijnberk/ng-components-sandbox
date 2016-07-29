var SandBox = require('../../resources/po/sandbox.component.po');

fdescribe('Sandbox component', function() {
    var sandbox;

    beforeEach(function (){
        browser.get('http://127.0.0.1:8282/src/samples/sandbox.html');
        sandbox = new SandBox(element(by.tagName('sand-box')));
    });

    it('should be present on the page', function() {
        expect(sandbox.isPresent())
            .toBeTruthy();
    });
});