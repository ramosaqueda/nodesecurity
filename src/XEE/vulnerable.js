var fs = require('fs'),
xml2js = require('xml2js');

function vulnerable(req, res){
    console.log(req.file);
    const xml = req.file.buffer;
    console.log(xml);
    
    var parser = new xml2js.Parser();
    
    
    
    fs.readFile(req.file.path, function(err, data) {
        try {
            parser.parseString(data, function (err, result) {
                console.log(result);
                
               res.send("Bienvenido Mr "+ result.user.username);
            });
        }
        catch(err) {
            console.log(err);
            res.send("Error indefinido" + err);
        }
     
    });
     
}
 module.exports = vulnerable;

 
  