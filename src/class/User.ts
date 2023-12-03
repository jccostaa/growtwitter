import { v4 as createUuid } from "uuid";
import { users } from "../data/users";
import { Tweet } from "./Tweet";
import { tweets } from "../data/tweets";


export class User {
    private _id: string
    private _following: User[] = [];
    private _tweets : Tweet[] = [];
    constructor(
        private _name:string,
        private _username:string,
        private _email:string,
        private _password:string
    ){
        if(User.usernameExist(_username)){
            console.log('Nome de usuario já cadastrado')
        }
        this._id = createUuid();
        }
        
        public sendTweet(content:string):void{
            const tweet:Tweet = new Tweet(content,'normal',this)
            tweets.push(tweet)
        }

        public follow(user:User):void{

            if(this.username != user.username){
                if(this._following.includes(user)){
                    console.log(`${this._name} já está seguindo ${user._name}`);
                }else{
                    this._following.push(user)
                    console.log(`${this._name} começou a seguir ${user._name}`);
    
                }
            }else{
                console.log('Você não pode seguir a si mesmo');
            }
        }
        
        public showFeed(): void {
            this._tweets.forEach(tweet => {
                console.log(`@${this.username} - ${tweet.content}`);

                if(tweet.likes.length === 1){
                    console.log(`   @${tweet.likes[0]} curtiu isso!`);
                }else if(tweet.likes.length >=2){
                    console.log(`   @${tweet.likes[0]} e mais ${tweet.likes.length-1 } pessoas curtiram!`)
                }
                tweet.replies.forEach(reply => {
                    console.log(`                   - @${reply.user.username}: ${reply.content}`);
                });
            });
            this._following.forEach((user) => {
                user._tweets.forEach((tweet) => {
                    console.log(`@${user._username}: ${tweet.content}`);
                        if(tweet.likes.length === 1){
                            console.log(`@${tweet.likes[0]} curtiu isso!`);
                        }else if(tweet.likes.length >=2){
                            console.log(`@${tweet.likes[0]} e mais ${tweet.likes.length-1 } pessoas curtiram!`)
                        }
                    tweet.replies.forEach(reply => {
                        console.log(`- @${reply.user.username}: ${reply.content}`);
                    });
                });
            });
        }

        public getFollowing():string{
            const usernames:string[] = this._following.map(user => `@${user.username}`);
            const followList:string = usernames.join(` - `)
            return followList
            }
        
        public showTweets():void {
            this._tweets.forEach(tweet => {
                console.log(`@${this.username} - ${tweet.content} 
                    Likes: ${tweet.likes.length}
                    Replies:`);
                tweet.replies.forEach(reply => {
                    console.log(`                   - @${reply.user.username}: ${reply.content}`);
                });
            });
        }

        public showHwoImFollowing():void {
            console.log(`Lista de usuários que ${this.username} segue:`);
            const usernames:string[] = this._following.map(user => `@${user.username}`);
            const followingList:string = usernames.join(', ');
            console.log(followingList);
        }
        
        
        static usernameExist(username:string):boolean{
            return users.some(user => user._username === username)
        }

        static newUser(name:string,username:string,email:string,password:string):User{
            if(User.usernameExist(username)){
                console.log('Nome de usuario já cadastrado')
            }
            const newUser:User = new User(name,username,email,password)
            users.push(newUser)
            return newUser
            } 

        get username(): string {
            return this._username;
          }
        get tweets():Tweet[]{
            return this._tweets
        }
        public  getDetails():{}{
            return{
                id: this._id,
                name: this._name,
                username: this._username,
                email: this._email,
                password: this._password,
                following: this.getFollowing(),
                tweets: this.tweets
            }
        }
        }

