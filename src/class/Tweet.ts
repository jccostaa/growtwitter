export class Tweet {
    constructor(
        public id:string,
        public content:string,
        public type:string
    ){}

    public reply(content:string){}

    public like(){}

    public show(){}

    public showReplies(){}
}