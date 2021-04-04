const Discord = require('discord.js')



module.exports = {
    name: 'delete-channel',
    description: "Deletes a specific channel.",
    cooldown: 5,
    async execute(message, args){
        let reason = args.slice(1).join(' ')
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You do not have permission to use this command.');
        if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`The bot does not have the required permissions to use this command.`)
        if(!args[0]) return message.reply('You are required to specify a channel to delete.')
        if(!reason) reason = 'Unspecified';
        const channel = message.mentions.channels.first() || message.guild.channels.cache.find(args[0])
        if(!channel) {
            return message.reply(
                `Invalid channel provided.`
            )
        }
        channel.delete(message.guild.id, {
        }, `${reason}`)
        const channeldeleteEmbed = new Discord.MessageEmbed()
        .setTitle('Delete Channel Confirmation')
        .setDescription(`This message is to confirm that you deleted the following channel: ***${channel}*** in the server **${message.guild.name}** with the following reason: ${reason}.`)
        .setTimestamp();
        message.author.send(channeldeleteEmbed)
        message.channel.send(`The channel ${channel} has been deleted. Any role, regardless of the permissions initialized, cannot view the channel.`)
//.then(message => message.delete({ timeout: 10000}))
    }
}