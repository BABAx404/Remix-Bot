const Discord = require("discord.js")
module.exports = {
  name: "invite",
  aliases: ["inv"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  async execute(bot, message, args) {
      
      if(message.author.bot || !message.guild) return message.reply(new Discord.MessageEmbed().setColor("BLUE").setDescription(`This command for serverOnly`));
         var embed = new Discord.MessageEmbed()
         .setColor("BLUE")
         .setDescription(`Send link here 1️⃣\nSend in DM 2️⃣`)
         message.channel.send(embed).then(async message1 => {
    await  message1.react("1️⃣")
        message1.react("2️⃣")
    const filter = (reaction, user) =>
        reaction.emoji.name === '1️⃣' && user.id === message.author.id;
        const filter1 = (reaction, user) =>
        reaction.emoji.name === '2️⃣' && user.id === message.author.id;
 const yes = message1.createReactionCollector(filter, {time: 300000})
        const no = message1.createReactionCollector(filter1, {time: 300000})
        
yes.on('collect', bbb => {
 
  message1.delete()
var embed = new Discord.MessageEmbed()
 .setColor("BLUE")
.addField("Security",("[Click here](https://discord.com/api/oauth2/authorize?client_id=743869029638471802&permissions=8&scope=bot)"))
message.channel.send(embed)

})
no.on('collect', nnn => {
  message1.delete()
  var embed10 = new Discord.MessageEmbed()
  .setColor("BLUE")
.addField("Security",("[Click here](https://discord.com/api/oauth2/authorize?client_id=743869029638471802&permissions=8&scope=bot)"))
message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setDescription(`Check your DM`));
message.author.send(embed10)
})
         })     
  }
}
