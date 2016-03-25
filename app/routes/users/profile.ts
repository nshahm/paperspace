import { User } from '../../models/User.ts';


export class Profile {

    public static init(app:any):void {
         app.get('/createuserprofile', createUserProfile);
    }

}

let createUserProfile = (req:any, res:any) => {
        res.send("Create user profile invoked");
}