require('seneca')()
  .use('../lib/read-csv')
  .use(require('seneca-rabbitmq-transport'))
  .listen(10203)
  .ready(function(){
    this.act({role:'read-csv',cmd:'return-json',file_path:'./public/test.csv'},console.log)
  })
