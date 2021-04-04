const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    name: 'mute-server',
    description: "Mute the server on your profile.",
    
	execute(message, args) {
        let amount = message.content.slice(+ 12);
         if(amount === undefined) amount = 'Unspecified.';
        if(message.member.id !== '637299944939585576') return message.channel.send(`You are not allowed to mute this server.`)
        const disabled = new Discord.MessageEmbed()

        .setTitle(`Server Muted`)
        .setDescription(`The server mute was applied to your profile. You will not be notified with any notifications within this server until the muting session is over.\n\nYour server mute will expire in **${amount}**.`)
        .setTimestamp();

        message.channel.send(disabled)
    }
}
