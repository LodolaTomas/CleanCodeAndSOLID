(()=>{

    // Aplicando el principio de responsabilidad unica
    // Priorizar la composición frente a la herencia!
    
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
        email:string;
        role:string; 
    }

    class User{
        public email:string; 
        public role:string; 
        public lastAccess: Date;
        constructor(
            {email,role}:UserProps,
        ){
            this.email=email;
            this.role=role;
            this.lastAccess=new Date();
        }
        checkCredentials(){
            return true;
        }
    }

    interface SettingsProps{
        workingDirectory:string;
        lastOpenFolder:string;
    }
    class Settings{
        public workingDirectory:string;
        public lastOpenFolder:string;
        constructor(
            {workingDirectory, lastOpenFolder}:SettingsProps
        )
        {
            
            this.workingDirectory=workingDirectory;
            this.lastOpenFolder=lastOpenFolder;
        }
    }

    interface UserSettingsProps{
        birthdate:Date;
        email:string; 
        gender:Gender;
        lastAccess:Date;
        lastOpenFolder:string;
        name:string;
        role:string; 
        workingDirectory:string;
    }

    class UserSettings{
        public person:Person;
        public user: User;
        public settings:Settings;
        constructor(
           {birthdate,email,gender,lastOpenFolder,name,role,workingDirectory}:UserSettingsProps
        ){
            this.person=new Person({name,gender,birthdate})
            this.user=new User({email,role})
            this.settings= new Settings({lastOpenFolder,workingDirectory})
        }

    }

    const userSettings = new UserSettings({
        workingDirectory:'/usr/home',
        birthdate:new Date(),
        email:'asd@gmai.com',
        gender:'M',
        lastAccess:new Date(),
        lastOpenFolder:'/home',
        name:'tomas',
        role:'Admin'
    })

    console.log(userSettings,{areCredentialsValid:userSettings.user.checkCredentials()});

})();