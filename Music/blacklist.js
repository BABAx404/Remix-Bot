const db = require('quick.db')
const config = require('../../configs/id.json')

module.exports = {
  name: "blacklist",
  category: "owner",
  description: "Bans a user",
  usage: "blacklist Jayden#2222, Blacklit jayden 2222",
  accessibility: "owner",

  async execute(bot, message, args) {

        let owner = [...config.ownerids]

        if(!owner.includes(message.author.id)) return;

        try {

        let user = await client.users.cache.get(args[0]);
    if(!user) return message.lineReply(`Invliad user ID Or Username please recheck`)
    
    let fetched = db.get(`blacklist_${user.id}`)
    
    if(!fetched) {
      db.set(`blacklist_${user.id}`, true)
      message.lineReply(`The following user has been blacklisted <@${user.id}> with the ID Of ${user.id}`)
    }    else{ 
      return message.lineReply("This user is already blacklisted to removen the blacklist fromt this user run: `;unblacklist`")
    }

        } catch (err) {
             message.lineReply(`An error has occured: ${err.message}`)
     }
    }
}
