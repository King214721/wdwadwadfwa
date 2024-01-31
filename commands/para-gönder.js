const db = require("fera.db");
const ms = require('ms');
const moment = require("moment");
exports.run = async (client, message, args) => {
  let kullanıcı = message.mentions.members.first()
  let paran = db.fetch(`para.${message.author.id}`)
  if (!kullanıcı) return message.reply("**Lütfen bir kullanıcı etiketle!** <:cs_reddet:1142405174548254802>")
 let miktar = args[1]
 if (!miktar) return message.reply("**Lütfen bir miktar belirt!** <:cs_reddet:1142405174548254802>")
    
 if (paran < miktar) return message.reply('**Yeterli paran yok.** <:cs_reddet:1142405174548254802>')
 message.reply("- **Başarıyla belirtilen miktarda para transferi gerçekleştirildi.** <:icons_colorserververified:1143614978591567892>")
 db.add(`para.${kullanıcı.id}`, miktar)
 db.add(`para.${message.author.id}`, -miktar)




}
exports.conf = {
  aliases: ["para gönder","transfer"],
  permLevel: 0
};

exports.help = {
  name: 'para-gönder'
};