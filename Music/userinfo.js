const { MessageEmbed } = require('discord.js');
const { BOT_OWNER_ID,BOT_ID,SERVER_INVITE,EMOJI_DONE,EMOJI_ERROR} = require("../config.json");
module.exports = {
    name: "userinfo",
    aliases: ["user", "u", "U"],
    cooldown: 5,
    category: "extra",
    async execute(message, args) {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<:online:729181184193462285> online";
                break;
            case "dnd":
                status = "<:dnd:729181212530442311> dnd";
                break;
            case "idle":
                status = "<:idle:729181121933475931> idle";
                break;
            case "offline":
                status = "<:offline:729181162182017051> offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username}`)
            .setColor(`#FC00FF`)
            .setTimestamp()
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "<a:emoji_148:768871719561592894> Name : ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ Discriminator: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID : ",
                    value: user.user.id,
                },
                
                {
                    name: "<a:waya:813455060864073788> Activity : ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
                    inline: true
                },
                {
                    name: '<a:links:813729922643263558> Avatar link : ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: '<a:time:813403485902864435> Creation Date : ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: '<a:discord:813406342173818910> Joined Date : ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: '<a:KING:820738504036188181> User Roles : ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )

        await message.channel.send(embed)
    }
}
