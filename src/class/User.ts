import { v4 as createUuid } from "uuid";
import { users } from "../data/users";
import { Tweet } from "./Tweet";
import { tweets } from "../data/tweets";


export class User {
    public id: string
    private seguindo: User[] = []
    static getName: User;
    constructor(
        private name:string,
        private username:string,
        private email:string,
        private password:string
    ){
        if(User.usernameExist(username)){
            throw new Error('Nome de usuario já cadastrado')
        }
        this.id = createUuid();
        }
        
        public sendTweet(content:string){
            const tweet:Tweet = new Tweet(content,'normal',this.name)
            console.log(tweet)
            tweets.push(tweet)
        }
        
        public follow(user:User){}
        
        public showFeed():void{}
        
        public showTweets():void{}
        
        static usernameExist(username:string):boolean{
            return users.some(user => user.username === username)
        }
    }

