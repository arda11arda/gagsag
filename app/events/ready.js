const config = require("../config.json")
const log = message => {
  //Mercy Code | Müzik Botu
    console.log(`${message}`)
}

module.exports = async client => {
  
client.user.setActivity(`Nature Music`, {//Mercy Code | Müzik Botu
type: "PLAYING",
  url: "https://www.twitch.tv/data"})
    log(`[BOT] Aktif, Komutlar Yüklendi.`)
  }
//Mercy Code | Müzik Botu