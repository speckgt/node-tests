var fancify = require(process.argv[2]);
var test = require('tape');

test('fancify', function (t) {
    t.deepEqual(fancify('Hello'), '~*~Hello~*~', 'Hello should be fancy');
    t.deepEqual(fancify('Hello', true), '~*~HELLO~*~', 'Hello should be fancy and capitalized');
    t.deepEqual(fancify('Hello', false, '!'), '~!~Hello~!~', 'Hello should be fancy with a \'!\' in the middle');
    t.end();
});



