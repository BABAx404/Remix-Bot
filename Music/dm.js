const Discord = require('discord.js');

module.exports = {
	name: 'dm',
    description: 'DM a user in the guild.',
	cooldown: 5,
    
	execute(message, args) {
        if (message.member.id !== '637299944939585576')
      return message.channel.send("The bot creator may only use this command.");
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(`You are required to prove a member to Direct Message.`);
    if (!args.slice(1).join(" "))
      return message.channel.send("You are required to provide a message.");
    user.user
      .send(args.slice(1).join(" "))
      .catch(() => message.channel.send("The mentioned user has disabled Direct Messages for non-friends."))
      .then(() => message.reply(`**${user}** has received your message.\nMessage content: ${args.slice(1).join(" ")}`));
      
  },
};
