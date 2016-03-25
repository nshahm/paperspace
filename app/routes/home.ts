/// <reference path="../../typings/main.d.ts"/>

import {Request, Response, Express } from "express";

export default class HomeRoute {
    
    public static init(app:any):void {
        
       app.get('/paperspace', (req:any, res:any) => {
          res.status(200).send('Hey, Paperspace app started....');
       });        
    }
}