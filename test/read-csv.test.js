var assert = require('assert')

var seneca = require('seneca')()
    .use('../lib/read-csv.js')
    .use(require('seneca-rabbitmq-transport'))

seneca.act({
    role: 'read-csv',
    cmd: 'return-json',
    file_path: './public/test.csv'
}, function(err, out) {
    assert.ok(null == err)
    assert.equal("Space is only noise", out.data['row 1']["Track Title"])

})
