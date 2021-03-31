const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: "user",
  aliases: ["u"],
  description: "",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(message.author.avatarURL({dynamic: "true"}))
    .setColor("#FC00FF")
    .setImage(``)
   .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setDescription(``)
   .setTitle("Info User")
   .addField(`Name`, `**${message.author.tag}**`, true)
   .addField(`ID`, `**${message.author.id}**`, true)  
   .addField(`Created At`, `**${message.author.createdAt.toLocaleString()}**`, true)
   helpEmbed
   message.react("")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
