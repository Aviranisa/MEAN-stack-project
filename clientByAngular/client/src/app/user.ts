export class User {
    _id? : String;
    name? : String;
    email? : String;
    city? : String;
    street? : String;
    zipcode? : String;
    tasks? : [{_id: String ,title : String , completed :  Boolean}];
    posts? : [{_id: String ,title: String , body: String }];
}
