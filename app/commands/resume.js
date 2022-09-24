const Discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message) => {
//Mercy Code | Müzik Botu
    
    const play0 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription("**❗️ - Botla aynı kanalda olmalısın!**")
.setTimestamp()
.setFooter(`${config.footer}`)

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(play0);
    
    const resume1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription("**❗️ - Lütfen bir sesli kanala girin!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    if (!message.member.voice.channel) return message.channel.send(resume1);

    const resume2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**❗️ - Şu anda oynatma listesinde şarkı yok!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    if (!client.player.getQueue(message)) return message.channel.send(resume2);//Mercy Code | Müzik Botu

    client.player.resume(message);

    const resume3 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`✔️ - ${client.player.getQueue(message).playing.title} isimli şarkı başarıyla oynatılmaya devam ediyor.`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    message.channel.send(resume3);
//Mercy Code | Müzik Botu
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['devamet','resume','devam'],
   permLevel: 0
  };
   //Mercy Code | Müzik Botu
  exports.help = {
   name: 'resume',
   description: 'botun gecikme süresini gösterir',
   usage: 'prefix+ping'
  };