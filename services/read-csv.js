require('seneca')()
    .use('../lib/read-csv')
    .use(require('seneca-rabbitmq-transport'))
    .listen(10203)
    .client({
        type: 'rabbitmq'
    })
    .ready(function() {
        console.log('service is listening on port: 10203')
    })
