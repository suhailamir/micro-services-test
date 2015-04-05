module.exports = function(options) {
    var seneca = this
    var plugin = 'read-csv'


    seneca.add({
        role: plugin,
        cmd: 'return-json'
    }, cmd_return_json)


    function cmd_return_json(args, done) {
        var fs = require('fs');
        var parse = require('csv-parse');
       
        var parser = parse({
            delimiter: ','
        }, function(err, data) {
           
             var csv_response={};
            
            for (i = 0; i < data.length; i++) {
                if (i != 0) {
                    csv_response['row ' + i]={"Track Title":data[i][0],"Track Artist":data[i][1]}
                }

            }
            return done(null, {
                data: csv_response
            });

        });

        fs.createReadStream('./public/test.csv').pipe(parser);


    }


    return {
        name: plugin
    };
}
