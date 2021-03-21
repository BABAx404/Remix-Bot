const Discord = require(`discord.js`);
const { Client, Collection, MessageEmbed,MessageAttachment } = require(`discord.js`);
const { readdirSync } = require(`fs`);
const { join } = require(`path`);
const db = require('quick.db');
const { TOKEN, PREFIX, AVATARURL, BOTNAME, } = require(`./config.json`);
const figlet = require("figlet");
const client = new Client({ disableMentions: `` , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login('NzkyMDQ3MjA0MzYxMTc1MDkx.X-YBcQ.-GIvTy1dYG-W4lul5B1MNYJAy4Y');
client.commands = new Collection();
client.setMaxListeners(0);
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);

//this fires when the BOT STARTS DO NOT TOUCH
client.on(`ready`, () => {	
//////////////

////////
   
   ///////////////////////////////
    ////////////IFCHEMPTY//////////
        //remove everything in between those 2 big comments if you want to disable that the bot leaves when ch. or queue gets empty!
        setInterval(() => { 
          let member;
        client.guilds.cache.forEach(async guild =>{
        await delay(15);
          member = await client.guilds.cache.get(guild.id).members.cache.get(client.user.id)
        //if not connected
          if(!member.voice.channel)
          return;
        //if alone 
        if (member.voice.channel.members.size === 1) 
        { return member.voice.channel.leave(); }
      });
      
   
     client.user.setActivity(`${PREFIX}help | Remix Bot Is One`, { type: "LISTENING"});   
           
           
     client.user.setActivity(`${client.guilds.cache.size} | Servers`, { type: "LISTENING"});
           
           
      }, (5000));    
      ////////////////////////////////
      ////////////////////////////////
    figlet.text(`${client.user.username} ready!`, function (err, data) {
      if (err) {
          console.log('Something went wrong');
          console.dir(err);
      }
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
      console.log(data)
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
    })
   
});
//DO NOT TOUCH
//FOLDERS:
//Admin custommsg data FUN General Music NSFW others
commandFiles = readdirSync(join(__dirname, `Music`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Music`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `others`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `others`, `${file}`));
  client.commands.set(command.name, command);
}
//COMMANDS //DO NOT TOUCH
client.on(`message`, async (message) => {
  if (message.author.bot) return;
  
  //getting prefix 
  let prefix = await db.get(`prefix_${message.guild.id}`)
  //if not prefix set it to standard prefix in the config.json file
  if(prefix === null) prefix = PREFIX;

  //information message when the bot has been tagged
  if(message.content.includes(client.user.id)) {
    message.reply(new Discord.MessageEmbed().setColor("RANDOM").setAuthor(`${message.author.username}, My Prefix is ${prefix}, to get started; type ${prefix}help`, message.author.displayAvatarURL({dynamic:true})));
  } 
   
   //An embed announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}embed`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(saymsg)
    .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setFooter(`${message.author.username}`)
    .setTimestamp()
    //delete the Command
    message.delete({timeout: 300})
    //send the Message
    message.channel.send(embed)
  }
 
if(message.content.startsWith(`${prefix}invite`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
     message.react("<a:setting:813404135181385759>").catch(console.error);
    const embed = new Discord.MessageEmbed()
    .setDescription("<a:rast:813403866472251399> **[Click here](https://discord.com/api/oauth2/authorize?client_id=792047204361175091&permissions=8&scope=bot) to invite the bot.**")
    .setColor("BLACK")
    //send the Message
    message.author.send(embed)
  }   
   
  if(message.content.startsWith(`${prefix}partner-github`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
     message.react("<:github:819533772311101451>").catch(console.error);
    const embed = new Discord.MessageEmbed()
    .setDescription(`<:github:819533772311101451> **Project Github**
<a:rast:813403866472251399> **[Click Here](https://github.com/slawwwy/-) to open the project.**
**By :** <@637299944939585576>   
     
                   `)
    .setColor("BLACK")
    .setFooter(`KᑌᖇᗪIՏᕼᶜᵒᵈᵉʳ`, `https://cdn.discordapp.com/attachments/811929643027398677/819534203942207498/20-19-42-779963428713529355.png`)
    .setTimestamp()
    //send the Message
    message.author.send(embed)
  } 
  
 if(message.content.startsWith(`${prefix}accfake-github`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
     message.react("<:github:819533772311101451>").catch(console.error);
    const embed = new Discord.MessageEmbed()
    .setDescription(`<:github:819533772311101451> **Project Github**
<a:rast:813403866472251399> **[Click Here](https://github.com/dark-man99/Progress-Home-Acc-Fake) to open the project.**
**By :** <@637299944939585576>   
     
                   `)
    .setColor("BLACK")
    .setFooter(`KᑌᖇᗪIՏᕼᶜᵒᵈᵉʳ`, `https://cdn.discordapp.com/attachments/811929643027398677/819534203942207498/20-19-42-779963428713529355.png`)
    .setTimestamp()
    //send the Message
    message.author.send(embed)
  } 
   
if(message.content.startsWith(`${prefix}security-github`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
     message.react("<:github:819533772311101451>").catch(console.error);
    const embed = new Discord.MessageEmbed()
    .setDescription(`<:github:819533772311101451> **Project Github**
<a:rast:813403866472251399> **[Click Here](https://github.com/DarkMan9054/Security99) to open the project.**
**By :** <@721110030920974356>   
     
                   `)
    .setColor("BLACK")
    .setFooter(`KᑌᖇᗪIՏᕼᶜᵒᵈᵉʳ`, `https://cdn.discordapp.com/attachments/811929643027398677/819534203942207498/20-19-42-779963428713529355.png`)
    .setTimestamp()
    //send the Message
    message.author.send(embed)
  }   
  
if(message.content.startsWith(`${prefix}seastem-github`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
     message.react("<:github:819533772311101451>").catch(console.error);
    const embed = new Discord.MessageEmbed()
    .setDescription(`<:github:819533772311101451> **Project Github**
<a:rast:813403866472251399> **[Click Here](https://github.com/dark-man99/Progress-Home) to open the project.**
**By :** <@637299944939585576>   
     
                   `)
    .setColor("BLACK")
    .setFooter(`KᑌᖇᗪIՏᕼᶜᵒᵈᵉʳ`, `https://cdn.discordapp.com/attachments/811929643027398677/819534203942207498/20-19-42-779963428713529355.png`)
    .setTimestamp()
    //send the Message
    message.author.send(embed)
  }
   
//An help announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}help`)){
    //define saymsg
    message.react("<a:yes:813397195771740182>").catch(console.error);
     const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL({dynamic: "true"}))
    .setColor("BLACK")
    .setImage(``)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setAuthor("Remix Bot ✨", "https://cdn.discordapp.com/avatars/792047204361175091/c63ae917073804dcc2412c264a56c7c5.png?size=1024")
    .setDescription(`
<a:Erore:813505315534405632> **Prefix Bot**
__** **>** **__
◈ ━━━━━━━━ ● ━━━━━━━━ ◈
<a:discord:813406342173818910> **User Commands**
\`>invite\` - \`>support\` - \`>about\`
\`>ping\` - \`>prefix\` - \`>uptime\` - \`>embed\`
◈ ━━━━━━━━ ● ━━━━━━━━ ◈
<a:setting:813404135181385759> **Fun Commands**
\`>lock(l)\` - \`>unlock(ul)\` - \`>slowmode\`
◈ ━━━━━━━━ ● ━━━━━━━━ ◈
<a:dark:813714900777959444> **Music Commands**
\`>play\` - \`>skip\` - \`>skipto\`
\`>stop\` - \`>volume\` - \`>nowplaying\`
\`>shuffle\` - \`>search\` - \`>resume\`
\`>remove\` - \`>queue\` - \`>filter\`
\`>loop\` - \`>lyrics\` - \`>radio\`
◈ ━━━━━━━━ ● ━━━━━━━━ ◈ 
<:github:819533772311101451> **Project Command**
\`>security-github\` - \`>pratner-github\`
\`>accfake-github\` - \`>seastem-github\`
◈ ━━━━━━━━ ● ━━━━━━━━ ◈ 
<a:links:813729922643263558> **Links**
__**[Support](https://discord.gg/FRZ5vAJ4Rm)**__ **-** __**[Invite](https://discord.com/oauth2/authorize?client_id=792047204361175091&permissions=1076131920&scope=bot)**__
`)

    //send the Message
    message.channel.send(embed)
  }   
   
//An suuport announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}support`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription (`

<a:rast:813403866472251399> **[Invite](https://discord.com/oauth2/authorize?client_id=792047204361175091&permissions=1076131920&scope=bot)**
<a:lodaing:813403104384647238>
<a:rast:813403866472251399> **[Support](https://discord.com/oauth2/authorize?client_id=792047204361175091&permissions=1076131920&scope=bot)**

`)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setAuthor(`Support Remix Bot`, `https://cdn.discordapp.com/avatars/792047204361175091/52bf0de2825637fcf588b1d672ad81f7.png?size=1024`)
    .setImage(`https://cdn.discordapp.com/attachments/795388713659269150/820761124310876160/23-51-29-image0-40.gif`)
    
    //send the Message
    message.channel.send(embed)
  }
   
//An about announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}about`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setAuthor("About Remix Bot.", "https://cdn.discordapp.com/emojis/813397195771740182.gif?v=1")
    .setThumbnail(`https://cdn.discordapp.com/avatars/792047204361175091/c63ae917073804dcc2412c264a56c7c5.png?size=1024`)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setDescription(`
**[Support](https://discord.gg/FRZ5vAJ4Rm)** | **[Invite](https://discord.com/oauth2/authorize?client_id=792047204361175091&permissions=1076131920&scope=bot)**
**Owner Bot**
<@637299944939585576>
●
**Name Bot**
Remix Bot ✨#9054 
●
**Prefix Bot**
${prefix}
●
**Job Bot**
Music
●
**Guilds**
${client.guilds.cache.size}
●
**Ping**
${client.ws.ping}ms
●
**Version**
V2
`)

    //send the Message
    message.channel.send(embed)
  }  

//command Handler DO NOT TOUCH
 const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
 if (!prefixRegex.test(message.content)) return;
 const [, matchedPrefix] = message.content.match(prefixRegex);
 const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
 const commandName = args.shift().toLowerCase();
 const command =
   client.commands.get(commandName) ||
   client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
 if (!command) return;
 if (!cooldowns.has(command.name)) {
   cooldowns.set(command.name, new Collection());
 }
 const now = Date.now();
 const timestamps = cooldowns.get(command.name);
 const cooldownAmount = (command.cooldown || 1) * 1000;
 if (timestamps.has(message.author.id)) {
   const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
   if (now < expirationTime) {
     const timeLeft = (expirationTime - now) / 1000;
     return message.reply(
      new MessageEmbed().setColor("BLACK")
      .setTitle(`<a:halaya:813455108577689601> Please wait \`${timeLeft.toFixed(1)} seconds\` before reusing the \`${prefix}${command.name}\`!`)    
     );
   }
 }
 timestamps.set(message.author.id, now);
 setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
 try {
   command.execute(message, args, client);
 } catch (error) {
   console.error(error);
   message.reply( new MessageEmbed().setColor("BLACK")
   .setTitle(`<a:halaya:813455108577689601> There was an error executing that command.`)).catch(console.error);
 }


});

client.on("guildCreate", guild => {
  let channel = client.channels.cache.get("822923806812667974");
  let embed = new MessageEmbed().setColor("BLACK")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `<a:like:813847731285393439> Join Server`)
  .addField("<a:rast:813403866472251399> **Server Name**", `${guild.name}`)
  .addField("<a:rast:813403866472251399> **Server Owner**", `${guild.owner}`)
  .addField("<a:rast:813403866472251399> **Server Id**", `${guild.id}`)
  .addField("<a:rast:813403866472251399> **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});
client.on("guildDelete", guild => {
  let channel = client.channels.cache.get("822923852568461323");
  let embed = new MessageEmbed()
  .setColor("BLACK")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle(`<a:close:813455155991019543> Left Server`)
  .addField("<a:rast:813403866472251399> **Server Name**", `${guild.name}`)
  .addField("<a:rast:813403866472251399> **Server Owner**", `${guild.owner}`)
  .addField("<a:rast:813403866472251399> **Server Id**", `${guild.id}`)
  .addField("<a:rast:813403866472251399> **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});

function delay(delayInms) {
 return new Promise(resolve => {
   setTimeout(() => {
     resolve(2);
   }, delayInms);
 });
}


//Bot coded by DarkMan#2021
