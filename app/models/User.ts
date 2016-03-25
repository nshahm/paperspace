export class User {
    
    firstName:string;
    lastName:string;
    email:string;
    
    
    constructor(firstName:string, lastName:string, email:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    
    set setEmail(email:string) {
        this.email = email;
    }
    
    set setFirstName(firstName:string) {
        this.firstName = firstName;
    }
    
    
    set setLastName(lastName:string) {
        this.lastName = lastName;
    }
}