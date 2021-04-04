const Discord = require('discord.js')



module.exports = {
    name: 'server',
    description: "Displays the information on the server.",

    execute(message, args) {
        const { guild } = message
        //const icon = guild.iconURL()
        const { icon, name, region, memberCount, large, verified, owner, maximumMembers, premiumTier, vanityURLCode, premiumSubscriptionCount, afkChannel, createdAt, channels, verificationLevel, mfaLevel, id, roles } = guild
        const serverinfoEmbed = new Discord.MessageEmbed()
        .setTitle(`Server information for **${message.guild.name}**:`)
        .setColor("#FC00FF")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter(`${message.author.tag}`)
        .setTimestamp()
        .setAuthor(`${message.guild.name}`,message.guild.iconURL({ dynamic: true }))
        .addFields(
            {
                name: 'Server Name',
                value: name,
                inline: true
            },
            {
                name: 'Server Owner',
                value: owner,
                inline: true
            },
            {
                name: 'Server ID',
                value: guild.id,
                inline: true
            },
            {
                name: 'Created',
                value: guild.createdAt,
                inline: true
            },
            {
                name: 'Region',
                value: region,
                inline: true
            },
            {
                name: 'AFK channel',
                value: guild.afkChannel || `None`,
                inline: true
            },
            {
                name: 'Total Members',
                value: guild.memberCount,
                inline: true
            },
            {
                name: 'Verification Level',
                value: guild.verificationLevel,
                inline: true
            },
            {
                name: 'Roles',
                value: guild.roles.cache.size || `0`,
                inline: true
            },
            {
              name: 'Emojis',
              value: guild.emojis.cache.size || `0`,
              inline: true
            },
            {
                name: 'Channels',
                value: guild.channels.cache.size || `1`,
                inline: true
            },
            {
                name: 'Server Verified',
                value: guild.verified || `No`,
                inline: true
            },
            {
                name: 'Maximum Members',
                value: guild.maximumMembers || `100`,
                inline: true
            },
            {
                name: 'Server Boosts',
                value: guild.premiumSubscriptionCount || `0`,
                inline: true
            },
            {
                name: 'Server Boost Level',
                value: guild.premiumTier || `0`,
                inline: true
            },
            {
                name: 'Vanity Invite Code',
                value: guild.vanityURLCode || `Unavailable`,
                inline: true
            },
            {
                name: 'Default Notification Settings',
                value: guild.DefaultMessageNotifications || `none`,
                inline: true
            }
        )
        message.channel.send(serverinfoEmbed)
    }
}
