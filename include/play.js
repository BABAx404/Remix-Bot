////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const ytdl = require("discord-ytdl-core");
const { canModifyQueue } = require("../util/MilratoUtil");
const { Client, Collection, MessageEmbed, splitMessage, escapeMarkdown,MessageAttachment } = require("discord.js");
const { attentionembed } = require("../util/attentionembed");
const createBar = require("string-progressbar");
const lyricsFinder = require("lyrics-finder");
const {
  approveemoji,
  denyemoji,
  BOTNAME,
} = require(`../config.json`);
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  async play(song, message, client, filters) {
    //get the queue!
    const queue = message.client.queue.get(message.guild.id);
    //if no song provided
    if (!song) {
      //leave the channel
      queue.channel.leave();
      //delete the queue for this server
      message.client.queue.delete(message.guild.id);
      //define the embed
      const endembed = new MessageEmbed().setColor("RANDOM")
        .setAuthor(`Music Queue ended.`, "https://cdn.discordapp.com/emojis/776781295191064588.gif?v=1")
      //set the embed
      return queue.textChannel.send(endembed).catch(console.error);
    }
    //do some variables defining
    let stream = null;
    let streamType = song.url.includes("youtube.com") ? "opus" : "ogg/opus"; //if its youtube change streamtype
    let isnotayoutube = false; //is not a youtube
    let seekTime = 0; //seektime to 0
    let oldSeekTime = queue.realseek; //the seek time if you skipped the song it would reset it himself, this provents it
    let encoderArgstoset; //encoderargs for the filters only for youtube tho
    if (filters)
    {
      //if filter is remove
      if (filters === "remove") {
        //clear the filters (actual setting them to something clean which stopps earraping)
        queue.filters = ['-af','dynaudnorm=f=200'];
        //defining encodersargs
        encoderArgstoset = queue.filters;
        //try to get seektime
        try{
          //set seektime to the howlong a song is playing plus the oldseektime
          seekTime = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000 + oldSeekTime;
        }
        //catch if try is not possible
        catch{
          //set seektime to 0
          seekTime = 0;
        }
        //set the realseek time with seektime
        queue.realseek = seekTime;
      }
      else{
        //try to get seektime
        try{
            //set seektime to the howlong a song is playing plus the oldseektime
          seekTime = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000 + oldSeekTime;
        }
        //catch if try is not possible
        catch{
          //set seektime to 0
          seekTime = 0;
        }
        //set the realseek time with seektime
        queue.realseek = seekTime;
        //push the queue filters array so that you can have multiple filters
        queue.filters.push(filters)
        //set the encoderargs to the filters
        encoderArgstoset = ['-af', queue.filters]
      }

    }


    try {
      if (song.url.includes("youtube.com")) {
         stream = ytdl(song.url, {
          filter: "audioonly",
          opusEncoded: true,
          encoderArgs: encoderArgstoset,
          bitrate: 320,
          seek: seekTime,
          quality: "highestaudio",
          liveBuffer: 40000,
          highWaterMark: 1 << 50, 

      });
      } else if (song.url.includes(".mp3") || song.url.includes("baseradiode")) {
        stream = song.url;
        isnotayoutube = true;
      }
    } catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      }

      console.error(error);
      return attentionembed(message, `Error: ${error.message ? error.message : error}`);
    }

    queue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id));

    if(isnotayoutube){
      console.log("TEST")
      const dispatcher = queue.connection
      .play(stream)
      .on("finish", () => {
        if (collector && !collector.ended) collector.stop();

        if (queue.loop) {
          let lastSong = queue.songs.shift();
          queue.songs.push(lastSong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
    })
    .on("error", (err) => {
      console.error(err);
      queue.songs.shift();
      module.exports.play(queue.songs[0], message);
    });
  dispatcher.setVolumeLogarithmic(queue.volume / 100);
    }else{
      const dispatcher = queue.connection
      .play(stream, { type: streamType })
      .on("finish", () => {
        if (collector && !collector.ended) collector.stop();

        if (queue.loop) {
          let lastSong = queue.songs.shift();
          queue.songs.push(lastSong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
      })
      .on("error", (err) => {
        console.error(err);
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      });
    dispatcher.setVolumeLogarithmic(queue.volume / 100);
    }

  let thumb;
    if (song.thumbnail === undefined) thumb = "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png";
    else thumb = song.thumbnail.url;

    try {
      const newsong = new MessageEmbed()
        .setTitle("<:Youtube:813453040929210379>:"+song.title)
        .setURL(song.url)
        .setColor("RANDOM")
        .setThumbnail(thumb)
        .setAuthor("Play Now Music...", "https://cdn.discordapp.com/emojis/819601617132191804.gif?v=1")
        .setImage()
        .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
        .addField("<a:rast:813403866472251399> Requested by :", `${message.author}`, true)
        .addField("<:file:813460388057972736> Text Channel :", `\`#${message.channel.name}\``, true)
        .addField("<a:music:813460704031145986> Volume :", `\`100\``, true)
        .addField("<a:time:813403485902864435> Time :", `\`${song.duration} Minutes 🖇\``, true)

      var playingMessage = await queue.textChannel.send(newsong);
      

      await playingMessage.react("⏭"); //skip
      await playingMessage.react("⏯"); //pause
      await playingMessage.react("🔄"); //loop
      await playingMessage.react("⏹"); //stop
      await playingMessage.react("❓"); //np
      await playingMessage.react("🎵"); //queue
      await playingMessage.react("📑"); //lyrics
    } catch (error) {
      console.error(error);
    }



    const filter = (reaction, user) => user.id !== message.client.user.id;
    var collector = playingMessage.createReactionCollector(filter, {
      time: song.duration > 0 ? song.duration * 1000 : 600000
    });

    collector.on("collect", async (reaction, user) => {
      if (!queue) return;
      const member = message.guild.member(user);

      switch (reaction.emoji.name) {
        //queue
        case "🎵":
          reaction.users.remove(user).catch(console.error);
          const description = queue.songs.map((song, index) => `${index + 1}. ${escapeMarkdown(song.title)}`);

          let queueEmbed = new MessageEmbed()
            .setTitle("<a:stop:813505072704913419> Music Queue")
            .setDescription(description)
            .setColor("RANDOM")
             ;
      
          const splitDescription = splitMessage(description, {
            maxLength: 2048,
            char: "\n",
            prepend: "",
            append: ""
          });
      
          splitDescription.forEach(async (m) => {
      
            queueEmbed.setDescription(m);
            message.react("<a:RemixBot:819601617132191804>")
            message.channel.send(queueEmbed);
          });
          break;
        //np
        case "❓":
        reaction.users.remove(user).catch(console.error);
        const song = queue.songs[0];
        //get current song duration in s
        let minutes = song.duration.split(":")[0];   
        let seconds = song.duration.split(":")[1];    
        let ms = (Number(minutes)*60+Number(seconds));   
        //get thumbnail
        let thumb;
        if (song.thumbnail === undefined) thumb = "https://cdn.discordapp.com/attachments/748095614017077318/769672148524335114/unknown.png";
        else thumb = song.thumbnail.url;
        //define current time
        const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
        //define left duration
        const left = ms - seek;
        //define embed
        let nowPlaying = new MessageEmbed()
          .setTitle("<a:like:813847731285393439> Now playing")
          .setDescription(`**[${song.title}](${song.url})**`)
          .setThumbnail(song.thumbnail.url)
          .setColor("RANDOM")
          .setFooter("Time Remaining: " + new Date(left * 1000).toISOString().substr(11, 8));
          //if its a stream
          if(ms >= 10000) {
            nowPlaying.addField("\u200b", "🔴 LIVE", false);
            //send approve msg
            return message.channel.send(nowPlaying);
          }
          //If its not a stream 
          if (ms > 0 && ms<10000) {
            nowPlaying.addField("\u200b", "**[" + createBar((ms == 0 ? seek : ms), seek, 25, "▬", "⚪️")[0] + "]**\n**" + new Date(seek * 1000).toISOString().substr(11, 8) + " / " + (ms == 0 ? " ◉ LIVE" : new Date(ms * 1000).toISOString().substr(11, 8))+ "**" , false );
            //send approve msg
            return message.channel.send(nowPlaying);
          }
        
        break;
        //skip
        case "⏭":
          queue.playing = true;
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return;
          queue.connection.dispatcher.end();
          const skipembed = new MessageEmbed().setColor("#c219d8").setAuthor(`${user.username} skipped the song.`, "https://cdn.discordapp.com/attachments/748633941912584333/753201474691137647/next.png")
          queue.textChannel.send(skipembed).catch(console.error);

          collector.stop();

          break;
        //lyrics
        case "📑":
        
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return;
          let lyrics = null;
          let temEmbed = new MessageEmbed()
          .setAuthor("Searching...", "https://cdn.discordapp.com/emojis/757632044632375386.gif?v=1").setFooter("Lyrics")
          .setColor("RANDOM")
          let result = await message.channel.send(temEmbed)
          try {
            lyrics = await lyricsFinder(queue.songs[0].title,"");
            if (!lyrics) lyrics = `No lyrics found for ${queue.songs[0].title}.`;
          } catch (error) {
            lyrics = `No lyrics found for ${queue.songs[0].title}.`;
          }
      
          let lyricsEmbed = new MessageEmbed()
            .setTitle("📑 Lyrics")
            .setDescription(lyrics)
            .setColor("RANDOM")
      
          if (lyricsEmbed.description.length >= 2048)
      
            lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
            message.react("<a:like:813847731285393439>");
          return result.edit(lyricsEmbed).catch(console.error);

          break;
          //pause
        case "⏯":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return;
          if (queue.playing) {
            queue.playing = !queue.playing;
            queue.connection.dispatcher.pause(true);
            const pausemebed = new MessageEmbed().setColor("RANDOM")
              .setAuthor(`${user.username} paused the music.`, "https://cdn.discordapp.com/emojis/769912238236106793.png")
            queue.textChannel.send(pausemebed).catch(console.error);
          } else {
            queue.playing = !queue.playing;
            queue.connection.dispatcher.resume();
            const playembed = new MessageEmbed().setColor("RANDOM")
              .setAuthor(`${user.username} resumed the music!`, "https://cdn.discordapp.com/emojis/769912238236106793.png")
            queue.textChannel.send(playembed).catch(console.error);
          }
          break;
          //loop  
        case "🔄":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return;
          queue.loop = !queue.loop;
          const loopembed = new MessageEmbed().setColor("RANDOM")
            .setAuthor(`Loop is now ${queue.loop ? " enabled" : " disabled"}`, "https://cdn.discordapp.com/emojis/813403485902864435.gif?v=1")
          queue.textChannel.send(loopembed).catch(console.error);
          break;
          //stop
        case "⏹":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) return;
          queue.songs = [];
          const stopembed = new MessageEmbed().setColor("RANDOM").setAuthor(`${user.username} stopped the music!`, "https://cdn.discordapp.com/emojis/813505072704913419.gif?v=1")
          queue.textChannel.send(stopembed).catch(console.error);
          try {
            queue.connection.dispatcher.end();
          } catch (error) {
            console.error(error);
            queue.connection.disconnect();
          }
          collector.stop();
          break;

        default:
          reaction.users.remove(user).catch(console.error);
          break;
      }
    });

    collector.on("end", () => {
      playingMessage.reactions.removeAll().catch(console.error);
      if (PRUNING && playingMessage && !playingMessage.deleted) {
        playingMessage.delete({ timeout: 3000 }).catch(console.error);
      }
    });
  }
};
