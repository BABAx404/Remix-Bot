const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: "gif",
  aliases: ["gif"],
  cooldown: 1.5,
  description: "",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setColor("#FC00FF")
    .setImage(``)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setDescription(`https://cdn.discordapp.com/attachments/826789126514671686/828682368880607282/21-50-20-a_82620d7d990f2bdcee81c9f4d99eb0dd.gif`, `https://cdn.discordapp.com/attachments/826789126514671686/828682338472558592/19-19-13-a_d656dc8c38aec87d691a2a4736431967.gif`)
   helpEmbed
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
