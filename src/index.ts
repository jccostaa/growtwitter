import { User } from "./class/User";
import { Tweet } from "./class/Tweet";
import { tweets } from "./data/tweets";
import { users } from "./data/users";

const user1 = new User('jean Costa','jeanccosta','dev.jeancosta@gmail.com','12345')

user1.sendTweet('oi')
user1.sendTweet('tchau')
user1.sendTweet('eips')

user1.showTweets()

const user2 = User.newUser('Luis','jeanccosta','luiscosta@gmail.com','12345')
//console.log(tweets)
