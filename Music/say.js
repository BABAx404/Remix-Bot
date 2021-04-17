const discord = require("discord.js");

module.exports = {
  name: "say",
    cooldown: 10,
  category: "info",
  description: "```say message bot```",
  usage: "say <message>",
  async execute(message, args) {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`YOU DON'T HAVE PERMS USE REPEATER`)
    }
    
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('BRUHH SAY SOMETHING')
    message.delete({timeout: 300})
    message.channel.send(text)
}
  
}
