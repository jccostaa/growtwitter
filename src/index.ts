import { User } from "./class/User";
import { Tweet } from "./class/Tweet";
import { tweets } from "./data/tweets";
import { users } from "./data/users";
import { log } from "console";

const user1 = new User('jean Costa','jeanccosta','dev.jeancosta@gmail.com','12345')

user1.sendTweet('oi')
user1.sendTweet('tchau')
user1.sendTweet('eips')

//user1.showTweets()

const user2 = User.newUser('Luis','luisccosta','luiscosta@gmail.com','12345')
user2.sendTweet('eipssssss')
user2.sendTweet('oups')
user2.sendTweet('rimps')
user1.follow(user2)
user1.follow(user2)
const tweet1 = new Tweet('eips oups','normal',user1)
tweet1.reply(user2,'rimps')


//tweet1.show()
user1.showTweets()
