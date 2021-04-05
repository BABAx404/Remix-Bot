const Discord = require('discord.js')



module.exports = {
    name: 'servericon',
    description: "Displays the icon of the server.",

    execute(message, args) {
        const { guild } = message
        let icon = guild.iconURL({size: 4096, dynamic: true})

        const servericonEmbed = new Discord.MessageEmbed()
        .setDescription(`Server icon for ${guild.name}:`)
        .setImage(icon)
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp();

        message.channel.send(servericonEmbed)
    }
}
