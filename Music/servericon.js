const Discord = require('discord.js')



module.exports = {
    name: 'servericon',
   aliases: ["avatar-server", "icon"],
   cooldown: 5,
    description: "Displays the icon of the server.",

    execute(message, args) {
        const { guild } = message
        let icon = guild.iconURL({size: 4096, dynamic: true})

        const servericonEmbed = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
        .setImage(icon)
        .setColor("#FC00FF")
        .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))

        message.channel.send(servericonEmbed)
    }
}
