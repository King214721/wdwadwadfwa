const Discord = require('discord.js'); //modüller
const db = require("fera.db");

exports.run = async (client, message, args) => {
    const dolarFiyati = db.get('dolar') || 0;
    const euroFiyati = db.get('euro') || 0;
    const coinFiyati = db.get('coin') || 0;
    const embed = new Discord.EmbedBuilder()
      .setColor('#030303')
      .setTitle('Markete Hoşgeldiniz!')
    .setDescription(`**Dövizler ** \n\n<:dolarnv:1143966160656805908> **Dolar**\n> **Fiyatı** \`\ ${dolarFiyati} \`\ \n> **Alım** \`\ !dolar-al \`\ \n\n<:euronv:1152975914876018720> **Euro**\n> **Fiyatı** \`\ ${euroFiyati} \`\ \n> **Alım** \`\ !euro-al \`\ \n\n<:icons8bitcoin48:1202274825973006427> **Bitcoin**\n> **Fiyatı** \`\ ${coinFiyati} \`\ \n> **Alım** \`\ !btc-al \`\ `)
      .setTimestamp();

    message.reply({ embeds: [embed] });
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["shop"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "market", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};
