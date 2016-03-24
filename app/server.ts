/// <reference path="../typings/main.d.ts"/>

import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/paperspace', (req:any, res:any) => {
    res.send('Hey, Paperspace app started....');
});

const serverHost = process.env.HOST || '0.0.0.0';
const serverPort = process.env.PORT || 80

var server = app.listen (serverPort, serverHost, () => {
    var host:string = server.address().address;
    var port:number = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});