const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
  name: "membercount",
  category: "count",
  async execute(message, args) {
    const Members = message.guild.memberCount;
    const bots = message.guild.members.cache.filter(
      member => member.bot === true
    ).size;
    const humans = message.guild.members.cache.filter(
      member => !member.user.bot
    ).size;
    const online = message.guild.members.cache.filter(
      member => member.presence.status === "online"
    ).size;
    const offline = message.guild.members.cache.filter(
      member => member.presence.status === "offline"
    ).size;
    const dnd = message.guild.members.cache.filter(
      member => member.presence.status === "dnd"
    ).size;
    const idle = message.guild.members.cache.filter(
      member => member.presence.status === "idle"
    ).size;

    const embed = new MessageEmbed()
      .setColor(`#FC00FF`)
      .setTitle(`Members Information`)
      .addField(`<a:discord:813406342173818910> | All Members`, Members)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setAuthor(`${message.guild.name}`)
      .setTimestamp();

    message.channel.send(embed);
  }
};
