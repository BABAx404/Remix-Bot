const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "lock",
  description: "Create a simple giveaway",
  cooldown: 1.5,
  usage: "",
  category: "fun",
  async execute(message, args) {
  if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`<@${message.author.id}>, Please wait for 10 second <a:emoji_13:798075791065350174>`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
    const lock = new Discord.MessageEmbed()
      .setTitle(``)
      .setThumbnail(message.author.avatarURL({dynamic: "true"}))
      .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
      .setColor("BLACK")
      .setDescription(
        `
🔒 Locked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message <:Disable:816031986308350013>
`
      )
      
      
    message.channel.send(lock);
  }
});
