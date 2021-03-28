const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
  name: "se",
  category: "fun",
  description: "```Converting Server emoji to PNG/GIF!```",
  async execute(message, args) {

    const emoji = args[0];
    if (!emoji) return message.channel.send(`Please Give Me A Emoji!`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      
      const Added = new MessageEmbed()
        .setTitle("Emoji Converter")
        .setColor(`BLACK`)
        .addField('<a:links:813729922643263558> ```Link```', `[Click Me](${Link})`)
        .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
        .setImage(Link
        );
      return message.channel.send(Added);
    } else {
      let CheckEmoji = (emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`Please Give Me A Valid Emoji!`);
      message.channel.send(
        `You Can Use Normal Emoji Without Adding In Server!`
      );
    }
  }
};
