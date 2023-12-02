import { v4 as createUuid } from "uuid";
import { users } from "../data/users";
import { Tweet } from "./Tweet";
import { tweets } from "../data/tweets";


export class User {
    private _id: string
    private _seguindo: User[] = [];
    private _tweets : Tweet[] = [];
    constructor(
        private _name:string,
        private _username:string,
        private email:string,
        private password:string
    ){
        if(User.usernameExist(_username)){
            console.log('Nome de usuario já cadastrado')
        }
        this._id = createUuid();
        }
        
        public sendTweet(content:string){
            const tweet:Tweet = new Tweet(content,'normal',this.name)
            console.log(tweet)
            tweets.push(tweet)
        }
        get name(): string {
            return this._name;
          }

        public follow(user:User){}
        
        public showFeed():void{
            console.log()
        }
        
        public showTweets():void{
            console.log(this._tweets)
        }
        
        static usernameExist(username:string):boolean{
            return users.some(user => user._username === username)
        }

        static newUser(name:string,username:string,email:string,password:string):User{
            if(User.usernameExist(username)){
                console.log('Nome de usuario já cadastrado')
            }
            const newUser= new User(name,username,email,password)
            users.push(newUser)
            return newUser
            } 
        }

