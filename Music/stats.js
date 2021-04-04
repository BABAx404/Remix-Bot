const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    name: 'stats',
	description: "View the statistics of the bot.",
	
	execute(message, args) {
        let days = Math.floor(message.client.uptime / 86400000);
        let hours = Math.floor(message.client.uptime / 3600000) % 24;
        let minutes = Math.floor(message.client.uptime / 60000) % 60;
        let seconds = Math.floor(message.client.uptime / 1000) % 60;
        const statsEmbed = new Discord.MessageEmbed()
        .setTitle(`Neural Statistics`)
        .setDescription(`The statistics of Neural.`)
        .setColor("#8ac7e3")
        .setThumbnail("https://cdn.discordapp.com/attachments/758750111597330442/762461765489131520/neural-bot.png")
        .addFields(
            {
                name: "Name",
                value: 'Neural',
                inline: true,
            },
            {
                name: "Version",
                value: 'v1.13',
                inline: true,
                
            },
            {
                name: "Users",
                value: message.client.users.cache.size,
                inline: true,
            },
            {
                name: "Servers",
                value: message.client.guilds.cache.size,
                inline: true,
            },
            {
                name: "Channels",
                value: message.client.channels.cache.size,
                inline: true,
            },
            {
                name: "Created",
                value: '7/01/2020',
                inline: true,
            },
            {
                name: "Library",
                value: 'Discord.js',
                inline: true,
            },
            {
                name: "Commands",
                value: '46',
                inline: true,
            },
            {
                name: "Uptime",
                value: `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`
            }
        )
        .addField("Invitation", "To add Neural to your server, [click here](https://discord.com/api/oauth2/authorize?client_id=727685745887674439&permissions=8&scope=bot)")
        .setTimestamp()
        message.channel.send(statsEmbed)
    }
}

//name: "",
//value: '',