import { v4 as createUuid } from "uuid";
import {tweetType} from "../types/tweetType"
import { User } from "./User";

export class Tweet {
    private _id:string
    private _user: User
    private _likes: string[] = []
    private _replies: Tweet[] = [];
    constructor(
        private _content:string,
        private type:tweetType,
        user:User
    ){
        this._id = createUuid(),
        this._user = user
        user.tweets.push(this)
    }

    public reply(user:User, content:string):void{
        const reply:Tweet = new Tweet(content,'reply',user)
        this._replies.push(reply)
    }

    public like(username:string):void{
        if(!this._likes.includes(username)){
            this._likes.push(username)
        }
    }

    public dislike(username:string):void{
        const index:number = this._likes.indexOf(username)

        if(index !== -1){
            this._likes.splice(index,1)
        }
    }

    public show():void{
        console.log(`
        @${this._user.username}: ${this._content}`)
        if(this._likes.length === 1){
            console.log(`@${this.likes[0]} curtiu isso!`);
        }else if(this._likes.length >=2){
            console.log(`@${this.likes[0]} e mais ${this.likes.length-1 } pessoas curtiram!`)
        }

        this._replies.forEach(reply => {
            console.log(`           > @${reply._user.username}: ${reply._content}`);
        })
    }
    
    public showReplies():void{
        const replies:Tweet[] = this.replies;
        console.log('Replies:');
        replies.forEach(reply => {
            console.log(`- @${reply.user.username}: ${reply.content}`);
        });
    }

    get content():string{
        return this._content
    }

    get likes():string[]{
        return this._likes
    }
    get replies():Tweet[]{
        return this._replies
    }
    get user():User{
        return this._user
    }

}