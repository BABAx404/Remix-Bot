const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/742107775475253259/751034168624021585/image0.gif", "https://cdn.discordapp.com/attachments/721044386217197699/797834930624528454/weiqs_5.gif", "https://cdn.discordapp.com/attachments/630159060162838568/804791195377074216/a_c1cb5f987d38d8716a8a014b00f072d2.gif", "https://cdn.discordapp.com/attachments/721044386217197699/799353877790720040/gif1.gif", "https://cdn.discordapp.com/attachments/608711476219478045/807003967116279818/image4.gif", "https://media.discordapp.net/attachments/687763784902770691/802851374073118750/a_d476bf43667abaf377470c36d2329b15.gif", "https://cdn.discordapp.com/attachments/694693923486171177/800298849561608192/a_c6115bd3e25736b6dab6c3192a82aa57.gif", "https://cdn.discordapp.com/attachments/721044386217197699/796039462459146340/e7.gif", "https://cdn.discordapp.com/attachments/737803513052266622/793385274905460766/image0.gif", "https://cdn.discordapp.com/attachments/737803513052266622/798100387009265694/image0.gif", "https://cdn.discordapp.com/attachments/659108282291585055/805505499848114226/image0.gif", "https://cdn.discordapp.com/attachments/721044386217197699/798543681937735680/a_f0b4f0adb8937879feb5c3bb5df5da60.gif", "https://cdn.discordapp.com/attachments/630159060162838568/806674132413841438/13.gif", "https://media.discordapp.net/attachments/756254155831509158/801441952888782888/image0-8.gif", "https://cdn.discordapp.com/attachments/742107775475253259/818630984421343303/image0.gif", "https://cdn.discordapp.com/attachments/694693923486171177/806970139139899422/25.gif", "https://cdn.discordapp.com/attachments/608711476219478045/807018787609641001/a_ff90d62fea2b309ad4e74ee7a5ad56f0.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Boy Gif")

.setColor("RANDOM")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-boy','boy-gif','gifboy','boygif'],

  permLevel: 0

};

exports.help = {

  name: 'boy',

  description: 'rexuss',

  usage: 'boy'

};
