const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: "corona",
  aliases: ["c19"],
  cooldown: 1.5,
  description: "",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
  .setColor("#00f8ff")
    .setTitle("Global Cases")
    .setDescription("Number of cases may be differ from other sources")
    .addField("Cases", `data.cases`, true)
    .addField("Active", `data.active`, true)
    .addField("Cases Today", `data.todayCases`, true)
    .addField("Critical Cases", `data.criticalw`, true)
    .addField("Deaths", `data.deaths`, true)
    .addField("Recovered", `data.recovered`, true)
   helpEmbed
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
