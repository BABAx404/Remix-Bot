const Discord = require('discord.js')



module.exports = {
    name: 'unhide-channel',
    description: "Un-hides a specific hidden channel.",
    cooldown: 5,
    async execute(message, args){
        let reason = args.slice(1).join(' ')
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You do not have permission to use this command.');
        if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`The bot does not have the required permissions to use this command.`)
        if(!args[0]) return message.reply('You are required to specify a channel to unhide.')
        if(!reason) reason = 'Unspecified';
        const channel = message.mentions.channels.first() || message.guild.channels.cache.find(args[0])
        if(!channel) {
            return message.reply(
                `Invalid channel provided.`
            )
        }
        channel.createOverwrite(message.guild.id, {
            CREATE_INSTANT_INVITE: true,
            VIEW_CHANNEL: true,
            READ_MESSAGE_HISTORY: true,
            SEND_MESSAGES: true,
            ADD_REACTIONS: true
        }, `${reason}`)
        const unchannelhideEmbed = new Discord.MessageEmbed()
        .setTitle('Un-hide Channel Confirmation')
        .setDescription(`This message is to confirm that you un-hid the following channel: ***${channel}*** in the server **${message.guild.name}** with the following reason: ${reason}.`)
        .setTimestamp();
        message.author.send(unchannelhideEmbed)
        message.channel.send(`The channel ${channel} was unhidden. The channel for everyone is now available.`)
//.then(message => message.delete({ timeout: 10000}))
    }
}