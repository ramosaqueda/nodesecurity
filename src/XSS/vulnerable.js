function vulnerable(req, res){
    const  check_secure  = req.body.check_secure

    let name =  req.body.name
    if (check_secure == 'on'){
       name = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

   
    mensaje = 'Bienvenido señor '+name;
        res.send(mensaje)
    }
 module.exports = vulnerable;

