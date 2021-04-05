const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client()

module.exports = {
    name: 'userinfo',
    description: 'Display the information for a specific member.',
    aliases: ["user", "u", "U"],
    cooldown: 2,
    execute(message, args){
        const { guild } = message
        const { nickname } = guild
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
        
        if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
        if (member.presence.status === 'online') member.presence.status = `Online`;
        if (member.presence.status === 'idle') member.presence.status = 'Idle';
        if (member.presence.status === 'offline') member.presence.status = 'Offline/Invisible';
    
        let x = Date.now() - member.createdAt;
        let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
        const joined = Math.floor(y / 86400000);
    
        const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
        let status = member.presence.status;
    
        const userEmbed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTimestamp()
        .setColor("#FC00FF")
        .setThumbnail(message.author.avatarURL({dynamic: "true"}))
        .addField("User ID:", member.id)
        .addField('Role(s):', `<@&${member._roles.join('> <@&')}>`)
        .addField('Server Nickname:', member.nickname || `None`)
        .addField("Account Created:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true) 
        .addField('Joined the Guild:', `${joineddate} \n (${joined} day(s) ago)`)
        .addField("Current Status:", status)
        .addField("Highest Ranked Role:", member.roles.highest)
    
        message.channel.send(userEmbed);
    }
}
