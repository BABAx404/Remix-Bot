const Discord = require('discord.js')

module.exports = {
name: "kick",
aliases: [],
category: "Moderation",
usage: "kick <@user> [reason]",
description: "Kick a user from the guild.",
  async execute(message, args) {
    
        let user = message.mentions.users.first();
        let reasonkick = message.content.split(' ').slice(2).join(' ');
        let guild = message.guild;
        let memberkick = message.guild.member;
    
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`You Require `KICK MEMBERS` Permission to Execute this Command`)
    
     if (message.mentions.users.size < 1) {
            return message.channel.send('You need to mention someone to kick!');
        }
    
     if (!reasonkick) {
            reasonkick = "No Reason Given"
        }
    
    if (!message.guild.member(user).kickable) {
            return message.channel.send("That Member couldn't be kicked due to role hierarchy");
        }
    
    message.guild.member(user).kick();
    
    let embed = new Discord.MessageEmbed()
    .setTitle("User Was Successfully Kicked")
    .setDescription(`${user.username}#${user.discriminator} was kicked by ${message.author.username}`)
    .addField(`Reason :-`, `${reasonkick}`)
    .setColor("RANDOM")
    message.channel.send(embed)
    
     let DmEmbed = new Discord.MessageEmbed()
    .setDescription(`You were Kicked from ${guild} for: ${reasonkick}`)
    .setColor("RANDOM")
    user.send(DmEmbed)
  }
}
