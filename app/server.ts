import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req:any, res:any) => {
    res.send('Paperspace app get method requested');
});

var server = app.listen (3000, () => {
    var host:string = server.address().address;
    var port:number = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})