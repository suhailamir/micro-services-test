
var assert = require('assert')

var seneca = require('seneca')()
      .use('../lib/read-csv.js')

seneca.act('role:read-csv,cmd:return-json',function(err,out){
  assert.ok(null==err)
  assert.equal("Space is only noise",out.data['row 1']["Track Title"])
  console.log(out.data)

})

