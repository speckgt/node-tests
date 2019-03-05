var repeatCallback = require(process.argv[2]);
var test = require('tape');

test('repeatCallback', (t) => {
    t.plan(5);
    repeatCallback(5, () => {
        t.pass('callback called');
    });
});
