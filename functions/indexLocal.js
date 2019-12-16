'use strict';

const app = require('./app');

const ipaddr = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
const port = process.env.OPENSHIFT_NODEJS_PORT || 8081;

try{
    app.listen(port, ipaddr);
    console.log('Servidor corriendo en  http://' + ipaddr + ':' + port);
}catch(err){
 console.log("Ocurio un error a al levantar el servidor: ", err);
}