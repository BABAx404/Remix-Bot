const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 1.5,
  description: "",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/755636685613826070/830068754897436712/standard_5.gif`)
    .setColor("#FC00FF")
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setAuthor("Remix Bot ✨", "https://cdn.discordapp.com/avatars/792047204361175091/c3c061050f56e58aa1f008de8b86dd26.png?size=1024")
    .setDescription(`
<a:discord:813406342173818910> **| User Commands**
> \`invite . invites . support . about   avatar . ping . prefix . uptime   embed . cv . vote . se . serverinfo   servericon(icon) . userinfo(user)\`



<a:setting:813404135181385759> **| Fun Commands**
> \`lock(l) . unlock(ul) . slowmode . ban   unban . createchannel . deletechannel   mute . unmute\`


<a:loading:830814256697966602> **| Gif Commands**
> \`boy . girl\` 


<a:dark:813714900777959444> **| Music Commands**
> \`play . skip . skipto . stop . volume   nowplaying . shuffle . search . resume   remove . queue . filter . loop   lyrics . radio\`



<a:links:813729922643263558> **| Links**
__**[Support](https://discord.gg/u4CbGW4qTT)**__ **-** __**[Vote](https://top.gg/bot/792047204361175091/vote)**__ **-** __**[Invite](https://discord.com/oauth2/authorize?client_id=792047204361175091&permissions=1076131920&scope=bot)**__ **-** __**[Website](https://website.remixbot9054.repl.co/)**__
`)
   helpEmbed
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
