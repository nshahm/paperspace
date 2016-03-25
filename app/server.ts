/// <reference path="../typings/main.d.ts"/>


import * as express from "express";
import * as bodyParser from "body-parser";
import { RegisteredRoutes } from './routes/route.ts';


const app:any = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

RegisteredRoutes.init(app);

const serverHost = process.env.HOST || '0.0.0.0';
const serverPort = process.env.PORT || 8080

var server = app.listen (serverPort, serverHost, () => {
    var host:string = server.address().address;
    var port:number = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

