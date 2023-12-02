import { v4 as createUuid } from "uuid";
import { users } from "../data/users";
import { Tweet } from "./Tweet";
import { tweets } from "../data/tweets";
import { log } from "console";


export class User {
    private _id: string
    private _following: User[] = [];
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
            const tweet:Tweet = new Tweet(content,'normal',this)
            tweets.push(tweet)
        }
        get username(): string {
            return this._username;
          }
        get tweets():Tweet[]{
            return this._tweets
        }

        public follow(user:User){
            if(this._following.includes(user)){
                console.log(`${this._name} já está seguindo ${user._name}`);
            }else{
                this._following.push(user)
                console.log(`${this._name} começou a seguir ${user._name}`);

            }
        }
        
        public showFeed(): void {
            this._following.forEach((user) => {
                user._tweets.forEach((tweet) => {
                    console.log(`
                    ${user._username}: ${tweet.content} 
                    Likes:${tweet.likes} 
                    Replies:${tweet.replies}`);
                });
            });
        }
        
        public showTweets(){
            this._tweets.forEach(tweet => {
                console.log(`@${this.username} - ${tweet.content} 
                Likes:${tweet.likes}
                Replies:`);
                tweet.replies.forEach(reply => {
                    console.log(`                   - @${reply.user.username}: ${reply.content}`);
                });
                
            })
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

