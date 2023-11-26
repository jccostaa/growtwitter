export class User {
    constructor(
        public id:string,
        public name:string,
        public username:string,
        public email:string,
        public password:string
    ){}

    public sendTweet(tweet:string){}

    public follow(user:User){}

    public showFeed():void{}

    public showTweets():void{}
}