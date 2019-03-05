var feedCat = require(process.argv[2]);
var test = require('tape');

test('feedCat', (t) => {
    t.plan(2);
    t.equal(feedCat('food'), 'yum');
    t.throws(feedCat.bind(null, 'chocolate'));
});