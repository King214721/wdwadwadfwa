const Discord = require('discord.js'); //modüller
const db = require("fera.db");

exports.run = async (client, message, args) => {
    const dolarFiyati = db.get('dolar') || 0;
    const euroFiyati = db.get('euro') || 0;
  const bitcoinFiyati = db.get('coin') || 0
    const embed = new Discord.EmbedBuilder()
      .setColor('#030303')
      .setTitle('İşte KaraBorsa Fiyatları <:cizerge:1146372621806620673>')
      .setDescription(`- <a:ook:1156583647709777921>  **Döviz Fiyatları**: \n> *Dolar :* \`${dolarFiyati}\` \n> *Euro  :* \`${euroFiyati}\`  \n\n- <a:ook:1156583647709777921> 
 **Coin Fiyatları:** \n> *BitCoin  :* \`${bitcoinFiyati}\`  `)
      .setTimestamp();

    message.reply({ embeds: [embed] });
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["borsa"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "borsa", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};
