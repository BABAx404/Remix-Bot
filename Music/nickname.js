const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    name: 'nickname',
	description: "Modify a member's nickname.",
	
	execute(message, args) {
        let nickname = args.slice(1).join(" ")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`You do not have permission to modify nicknames in this server.`)
        
        if(!args[0]) return message.channel.send(`You are required to mention the user you wish to modify their nickname.`)

        if(!user.kickable) return message.channel.send(`The mentioned user's nickname cannot be modified.`)

        if(!nickname) return message.channel.send(`Invalid nickname or blank nickname provided.`)

        if (message.content.length < 3) return message.reply('The provided nickname may not contain less than three characters.')
            
        user.setNickname(nickname)
        .catch(err => {
            if(err) return message.channel.send(`There was an error preventing this change. (${err})`)
        }) 
        if(message.member.hasPermission("MANAGE_NICKNAMES")) message.channel.send(`Successfully updated ${user}'s nickname to **${nickname}**.`)
        
         
    }
}