const Discord = require('discord.js')



module.exports = {
    name: 'hide-channel',
    description: "Hides a specific channel.",
    cooldown: 20,
    async execute(message, args){
        let reason = args.slice(1).join(' ')
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You do not have permission to use this command.');
        if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`The bot does not have the required permissions to use this command.`)
        if(!args[0]) return message.reply('You are required to specify a channel to hide.')
        if(!reason) reason = 'Unspecified';
        const channel = message.mentions.channels.first() || message.guild.channels.cache.find(args[0])
        if(!channel) {
            return message.reply(
                `Invalid channel provided.`
            )
        }
        channel.createOverwrite(message.guild.id, {
            CREATE_INSTANT_INVITE: false,
            VIEW_CHANNEL: false,
            READ_MESSAGE_HISTORY: false,
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
        }, `${reason}`)
        const channelhideEmbed = new Discord.MessageEmbed()
        .setTitle('Hide Channel Confirmation')
        .setDescription(`This message is to confirm that you hid the following channel: ***${channel}*** in the server **${message.guild.name}** with the following reason: ${reason}.`)
        .setTimestamp();
        message.author.send(channelhideEmbed)
        message.channel.send(`The channel ${channel} has been hidden. The channel for everyone is now insurmountable. Roles that are set whitelisted in the specified channel may only view it.`)
//.then(message => message.delete({ timeout: 10000}))
    }
}