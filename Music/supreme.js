const discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
  name: "Supreme",
  aliases: ["sup", "supreme", "Supreme", "SUPREME"],
  description: "eject someone from the spaceship - Among us Command",
  usage: "eject <user>",
  category: "<:fun:795035944377516052> fun",
  async execute(message, args) {
    let say = message.content.split(" ").slice(1).join(" ")
    if(!say) return message.channel.send(`❌ | `+"I cannot to repeat blank messages")
    const data = await fetch(`https://elevicky.sirv.com/supreme.jpg?w=425&h=130&scale.option=ignore&text.0.text=${say}&text.0.color=fefefe`)

    const embed = new discord.MessageEmbed()
      .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL())
      .setFooter(message.author.username)
      .setColor("BLUE")
      .setDescription(`[Click here, if the image didn't load!](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.channel.send(embed);
  }
