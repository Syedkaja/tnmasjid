export class User {

    constructor(public token: string, public name: string, public email: string) {

        this.token = token;
        this.name = name;
        this.email = email;
    }


}