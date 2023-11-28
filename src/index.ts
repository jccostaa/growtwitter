import { User } from "./class/User";
import { Tweet } from "./class/Tweet";
import { tweets } from "./data/tweets";

const user1 = new User('jean Costa','jeanccosta','dev.jeancosta@gmail.com','12345')

user1.sendTweet('oi')
user1.sendTweet('tchau')
user1.sendTweet('eips')

//console.log(tweets)
