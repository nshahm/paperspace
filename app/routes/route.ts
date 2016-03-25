import { Profile } from './users/profile.ts';
import  HomeRoute  from './home.ts';


export class RegisteredRoutes {
    public static init(app:any):void {
        HomeRoute.init(app);
        Profile.init(app);
    }
} 

