(()=>{

    // No aplicando el principio de responsabilidad unica
    
    type Gender = "M"| "F"
    class Person {
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate:Date
        ) {}
    }

    class User extends Person{
        constructor(
            public email:string, 
            public role:string, 
            public lastAccess:Date,
            name:string,
            gender:Gender,
            birthdate:Date,
        ){
            super(name,gender,birthdate);
            this.lastAccess = new Date();
        }
        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User{
        constructor(
            public WorkingDirectory:string,
            public lastOpenFolder:string,
            email:string, 
            role:string, 
            lastAccess:Date,
            name:string,
            gender:Gender,
            birthdate:Date,
        )
        {
            super(email,role,lastAccess,name,gender,birthdate)
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'asd@gmai.com',
        'Admin',
        new Date(),
        'tomas',
        'M',
        new Date(),
    )

    console.log(userSettings,{areCredentialsValid:userSettings.checkCredentials()});

})();