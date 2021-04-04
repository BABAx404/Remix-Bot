const Discord = require('discord.js')

module.exports = {
    name: 'create-channel',
    description: "Creates a channel within a guild.",
    cooldown: 5,

    execute(message, args) {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`You do not have the required permissions to execute this command.`)
        if(!args[0]) return message.channel.send(`You are required to input a specific channel type.`)
        if(!args[1]) return message.channel.send(`You are required to specify a channel name for the channel creation.`)
        
        message.guild.channels.create(args.slice(0).join(" "), (args.slice(1).join(" "), {type: `${args[0]}`}), message.channel.send(`Successfully created a new channel **${args[1]}**.`))
    }
}
