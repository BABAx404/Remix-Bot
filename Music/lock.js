const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "lock",
  description: "Create a simple giveaway",
  cooldown: 1.5,
  category: "fun",
  async execute(message, args) {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
 
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("Sorry you dont have permission");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**🔒 Locked chat**");
      });
  }
