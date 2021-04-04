const Discord = require('discord.js')


module.exports = {
    name: 'roleinfo',
    description: "Retrieve information based on a role.",
    cooldown: 5,

    async execute(message, args) {

        const { guild } = message
        const { hexColor, permissions, mentionable } = guild
        let rolename = args.slice(1).join(' ')
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
        let role = message.guild.roles.cache.find(x => x.name === rolename)
        if(!rolename) return message.channel.send(`A role name was not specified.`)
        if(!role) return message.channel.send(`The role name specified was not found in the guild.`)

        const roleinfoEmbed = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({dynamic: "true"}))
        .setTitle(`Role information for ${rolename}:`)
        .setColor("#FC00FF")
        .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
        .addFields(
            {
                name: 'Role Name',
                value: args[0]
            },
            {
                name: 'Role ID',
                value: role.id
            },
            {
                name: 'Role Permissions',
                value: role.permissions.FLAGS
            },
            {
                name: 'Role Color',
                value: role.hexColor
            },
            {
                name: 'Mentionable',
                value: role.mentionable || `No`
            },
        )
            message.channel.send(roleinfoEmbed)
    }
}
