Command : avatar.js

const discord = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: ["av"],
    category: "Utility",
    usage: "avatar/av @user",
    description: "",
    async execute(message, args) {

let user = message.author || message.mentions.users.first();

let embed = new discord.MessageEmbed()
.setTitle(`${user.username}'s Avatar!`)
.setImage(user.avatarURL({size: 2048, dynamic: true, format: "png"}))
.setColor("BLACK");
message.channel.send(embed);

    }
};
