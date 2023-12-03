import { User } from "./class/User";
import { Tweet } from "./class/Tweet";

const user1 = User.newUser('jean Costa','jeanccosta','dev.jeancosta@gmail.com','12345')
const user2 = User.newUser('Luis','luisccosta','luiscosta@gmail.com','12345')
const user3 = User.newUser('duda','dudarossato','dudaduda@gmail.com','12345')
const user4 = User.newUser('silvia','silviamota','silviamota@gmail.com','12345')



user1.sendTweet('oi')
user1.sendTweet('tchau')
user1.sendTweet('eips')

//user1.showTweets()

user2.sendTweet('eipssssss')
user4.sendTweet('é o inter!')
user2.sendTweet('oups')
user3.sendTweet('tuplek tuplin')
user2.sendTweet('rimps')
user1.follow(user2)
user1.follow(user3)
user1.follow(user4)
user2.follow(user1)
//user1.follow(user2)
const tweet1 = new Tweet('eips oups','normal',user1)
// tweet1.reply(user2,'rimps')
// tweet1.reply(user2,'romps')
//tweet1.like('luisccosta')
tweet1.like('jeanccosta')

//tweet1.show()
//user1.showTweets()
// tweet1.showReplies()
//user1.showHwoImFollowing()

user1.getDetails()
user1.showFeed()

