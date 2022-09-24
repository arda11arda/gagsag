const Discord = require("discord.js");
const config = require("../config.json")
exports.run = async (client, message) => {//Mercy Code | Müzik Botu

    const play0 = new Discord.MessageEmbed()//Mercy Code | Müzik Botu
.setColor('RANDOM')
.setDescription("**❗️ - Botla aynı kanalda olmalısın!**")//Mercy Code | Müzik Botu
.setTimestamp()
.setFooter(`${config.footer}`)

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(play0);
    
    const stop1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**❗️ - Lütfen bir sesli kanala girin!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    if (!message.member.voice.channel) return message.channel.send(stop1);

    const stop2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**❗️ - Şu anda oynatma listesinde şarkı yok!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    if (!client.player.getQueue(message)) return message.channel.send(stop2);

    client.player.setRepeatMode(message, false);
    client.player.stop(message);

    const stop3 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`✔️ - Şarkı başarıyla durduruldu!`)
    .setTimestamp()//Mercy Code | Müzik Botu
    .setFooter(`${config.footer}`)

    message.channel.send(stop3);

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['stop','durdur','dur'],
   permLevel: 0
  };//Mercy Code | Müzik Botu
   
  exports.help = {
   name: 'stop',
   description: 'botun gecikme süresini gösterir',
   usage: 'prefix+ping'
  };