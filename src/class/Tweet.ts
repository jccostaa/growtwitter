import { v4 as createUuid } from "uuid";
import {tweetType} from "../types/tweetType"
import { User } from "./User";

export class Tweet {
    private _id:string
    private _user: User
    private _likes: number = 0
    private _whoLikes:User[] = []
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

    public reply(user:User, content:string){
        const reply = new Tweet(content,'reply',user)
        this._replies.push(reply)
        
    }

    public like(){}

    public show(){
        
        console.log(`
        @${this._user.username}: ${this._content}
        Likes:${this._likes}
        Replies:`)
        this._replies.forEach(reply => {
            console.log(`           - @${reply._user.username}: ${reply._content}`);
        })
    }

    get content():string{
        return this._content
    }
    get likes():number{
        return this._likes
    }
    get replies(){
        return this._replies
    }
    get user(){
        return this._user
    }


    public showReplies(){


        return this._replies
    }
}