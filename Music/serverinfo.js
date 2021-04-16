const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: "serverinfo",
  aliases: ["server"],
  cooldown: 5,
  description: "",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setColor("#FC00FF")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setTimestamp()
    .setAuthor(`${message.guild.name}`,message.guild.iconURL({ dynamic: true }))
    .addField('<a:KING:820738504036188181> Owner Server :',`<@${message.guild.ownerID}>`,true)
    .addField('<a:time:813403485902864435> Created On :',message.guild.createdAt.toLocaleString())
    .addField('🆔 Server ID :',`\`${message.guild.id}\``,true)
    .addField('<a:discord:813406342173818910> Members :',`\`${message.guild.memberCount}\``,true)
    .addField('<:channel:828229201307369492> Channels :',`\`${message.guild.channels.cache.size}\``,true)
    .addField('<a:3arz:823238395895349358> Region :',`\`${message.guild.region}\``,true)
    .addField('<a:winner:817425780992114708> Roles :', `\`${message.guild.roles.cache.size}\``, true)
    .addField('<a:BOOST:828272075436589077> Total Boost :',`\`${message.guild.premiumSubscriptionCount} Boost\``,true)
    .addField('<a:Erore:813505315534405632> Emojis :',`\`${message.guild.emojis.cache.size}\``,true)
   helpEmbed
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
