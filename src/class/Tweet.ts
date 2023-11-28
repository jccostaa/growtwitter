import { v4 as createUuid } from "uuid";
import {tweetType} from "../types/tweetType"
import { User } from "./User";

export class Tweet {
    private id:string
    private user: string
    constructor(
        private content:string,
        private type:tweetType,
        user:string
    ){
        this.id = createUuid(),
        this.user = user
    }

    public reply(content:string){}

    public like(){}

    public show(){}

    public showReplies(){}
}