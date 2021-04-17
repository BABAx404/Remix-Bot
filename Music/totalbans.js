const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "bans",
    cooldown: 10,
    category: "extra",
    async execute(message, args) {
   message.guild.fetchBans().then(bans => {
            message.channel.send(`**Total Member Bans** \`${bans.size}\``)
        })

    }
}
