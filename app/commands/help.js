const Discord = require('discord.js');
const config = require("../config.json")
exports.run = function(client, message) {//Mercy Code | Müzik Botu
 
 const help = new Discord.MessageEmbed()
  .setAuthor(`${message.client.user.username}`, message.client.user.avatarURL)
  .setColor('RED')
  .addField('Müzik Komutları',`

  **${config.prefix}play <müzikismi>**: İstenilen şarkıyı çalar.
  **${config.prefix}pause**: Şarkıyı durdurur.
  **${config.prefix}resume**: Durdurulan şarkıyı devam ettirir.
  **${config.prefix}loop**: Şarkıyı tekrardan oynatır.
  **${config.prefix}skip**: Varsa listedeki diğer şarkılara geçer.
  **${config.prefix}stop**: Şarkıyı durdurur. 
  **${config.prefix}np**: Çalan şarkıyı gösterir.
  **${config.prefix}list**: Şarkıları gösterir.
  **${config.prefix}mix**: Şarkıları karıştırır.
  **${config.prefix}ping**: Botun gecikme süresini gösterir.
       `)
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)//Mercy Code | Müzik Botu
  .setThumbnail("https://media.discordapp.net/attachments/1005537879382032414/1007769655231905892/mercybotlist.gif?width=350&height=318")
  .setImage("https://media.discordapp.net/attachments/1005537879382032414/1007773914467938344/mercyyy.gif?width=351&height=45") 
   return message.channel.send(help).catch(console.error);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','yardim'],//Mercy Code | Müzik Botu
 permLevel: 0
};
 
exports.help = {
 name: 'help',
 description: 'botun gecikme süresini gösterir',
 usage: 'prefix+ping'//Mercy Code | Müzik Botu
};