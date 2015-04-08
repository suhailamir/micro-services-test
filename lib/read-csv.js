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
                    csv_response['row ' + i]={}
                    for(j=0;j<data[0].length;j++ ){ 
                    csv_response['row ' + i][data[0][j]]=data[i][j]

                    }
                }

            }
            return done(null, {
                data: csv_response
            });

        });

        fs.createReadStream(args.file_path).pipe(parser);


    }


    return {
        name: plugin
    };
}
