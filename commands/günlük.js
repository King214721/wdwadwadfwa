const Discord = require('discord.js'); //modüller
const db = require("fera.db");

exports.run = async (client, message, args) => {
    const userId = message.author.id;
    const lastClaimed = db.get(`lastClaimed.${userId}`);
    const cooldown = 24 * 60 * 60 * 1000; // 24 saat

    if (lastClaimed && Date.now() - lastClaimed < cooldown) {
      const remainingTime = cooldown - (Date.now() - lastClaimed);
      const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
      const seconds = Math.floor((remainingTime / 1000) % 60);
      return message.reply(`Günlük cash zaten talep ettiniz. Lütfen ${hours} saat, ${minutes} dakika, ${seconds} saniye sonra tekrar deneyin.`);
    }

    const paraMiktarı = 100; // Günlük para miktarı
    db.set(`lastClaimed.${userId}`, Date.now());
    db.add(`para.${userId}`, paraMiktarı);

    message.reply(`**Günlük** \` ${paraMiktarı} \` **Cash hesabınıza eklendi.**`);
  
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["günlük"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "günlük", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};