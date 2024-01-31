const db = require("fera.db");
const ms = require('ms');
const moment = require("moment");
const config = require('../config');
exports.run = async (client, message, args) => {
  let kullanıcı = message.mentions.members.first()
  if (!kullanıcı) return message.reply("**Lütfen bir kullanıcı etiketle!** <:cs_reddet:1142405174548254802>")
    if(message.author.id !== config.owner) return message.reply("**Bu komutu yalnızca kurucu kullanabilir!** <:cs_reddet:1142405174548254802>")
let miktar = args[1]
if (!miktar) return message.reply("**Lütfen eklenecek para miktarı gir!** <:cs_reddet:1142405174548254802>")
message.reply("**Başarıyla __<@"+kullanıcı+">__ kullanıcısına ** `"+miktar+"` ** miktar para eklendi!** <:cs_onay:1142405258409156708>")
db.add(`para.${kullanıcı.id}`, miktar)

    }

  


exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'para-ekle'
};