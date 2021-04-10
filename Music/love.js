const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "love",
  description: "Slap somebody",
  category: "image",
  async execute(message, args) {
    const user = message.mentions.users.first() || message.author;
    const slapped = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor("#FC00FF")
      .setTitle(`${message.author.username} Loved ${slapped}`)
      .setDescription(`[Click here if the image failed to load.](https://media.discordapp.net/attachments/738277612039962688/775017085948133406/image4.gif)`)
      .setImage(`https://media.discordapp.net/attachments/738277612039962688/775017085948133406/image4.gif`)
      .setTimestamp();

    message.channel.send({ embed });
  },
};
