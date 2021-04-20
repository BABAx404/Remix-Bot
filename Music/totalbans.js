const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'bans',
    category: "Moderation Commands",
    description: "List all Server Bans",
    usage: "bans",
async execute(message, args) {
    

        message.guild.fetchBans().then(bans => {
            let bansembed = new MessageEmbed()
                .setTitle(`**Ban's**`)
                .setColor("#FC00FF")
                .setDescription(`**Banned User**: ${bans.size}`)
                .setAuthor(`${message.guild.name}`,message.guild.iconURL({ dynamic: true }))
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setFooter("Status")
                .setTimestamp()
            message.channel.send(bansembed)

        })
    }
}
