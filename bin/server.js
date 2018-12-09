'use strict'

const app = require('../src/app');
const http = require('http');
const debug = require('debug')('dnd5e-node:server');

const port = normalizePort(process.env.port || '3000');

app.set('port',port);

const server = http.createServer(app);

server.listen(port);


function normalizePort(val) {
    const port = parseInt(val,10); 
    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;
}