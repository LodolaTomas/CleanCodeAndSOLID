(()=>{

    // NO aplicando el principio de responsabilidad unica
    // utilizando objetos
    
    type Gender = "M"| "F"

    interface PersonProps{
        birthdate:Date;
        gender: Gender; 
        name: string; 
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate:Date;
        constructor( {name,gender,birthdate}: PersonProps ) {
            this.name=name;
            this.gender=gender;
            this.birthdate=birthdate
        }
    }

    interface UserProps{
        birthdate:Date;
        email:string; 
        gender: Gender; 
        lastAccess:Date;
        name: string; 
        role:string; 
    }

    class User extends Person{
        public email:string; 
        public role:string; 
        public lastAccess:Date;
        constructor(
            {email,role,lastAccess,name,gender,birthdate}:UserProps,
        ){
            super({name,gender,birthdate})
            this.email=email;
            this.role=role;
            this.lastAccess=lastAccess;
        }
        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsProps{
        WorkingDirectory:string;
        lastOpenFolder:string;
        email:string; 
        role:string; 
        lastAccess:Date;
        name:string;
        gender:Gender;
        birthdate:Date;
    }
    class UserSettings extends User{
        public WorkingDirectory:string;
        public lastOpenFolder:string;
        constructor(
            {WorkingDirectory, lastOpenFolder, email, role, lastAccess, name, gender, birthdate}:UserSettingsProps
        )
        {
            super({email,role,lastAccess,name,gender,birthdate})
            this.WorkingDirectory=WorkingDirectory;
            this.lastOpenFolder=lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        WorkingDirectory:'/usr/home',
        birthdate:new Date(),
        email:'asd@gmai.com',
        gender:'M',
        lastAccess:new Date(),
        lastOpenFolder:'/home',
        name:'tomas',
        role:'Admin'
    })

    console.log(userSettings,{areCredentialsValid:userSettings.checkCredentials()});

})();