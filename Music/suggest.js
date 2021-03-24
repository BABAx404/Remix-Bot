const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "suggest",
    description: "Make a suggestion and have the community vote",
    category: "utility",
    usage: "i!suggest <suggestion>",
  async execute(message, args) {
        let suggestion = args.slice(0).join(" ");
        let SuggestionChannel = message.guild.channels.cache.find(channel => channel.name === "💡┃sᴜɢɢᴇsᴛɪᴏɴ");
      
      if(!suggestion) {
        return message.reply("Please describe what you want to suggest!")
      }
      
      
        message.react("✅").catch(console.error);
        const embed = new MessageEmbed()
            .setTitle("New Suggestion")
            .setDescription(suggestion)
            .setColor("BLACK")
            .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
        SuggestionChannel.send(embed).then(msg => {
            msg.react("✅")
            msg.react("❎")
        message.channel.send("");
        });
    }
}
