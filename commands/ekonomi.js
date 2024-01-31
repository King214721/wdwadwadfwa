const Discord = require('discord.js'); //modüller
const db = require("fera.db");

exports.run = async (client, message, args) => {
    const embed = new Discord.EmbedBuilder()
      .setColor('#08FFF8')
      .setTitle('Ekonomi Kategorisi')
      .setDescription('- `!çalış`: Çalışarak Para Kazanırsın. \n- `!çal`: Birinden Para Çalarsın. \n- `!banka`: Bankadaki Parana Bakarsın. \n- `!günlük`: Günlük Harçlık Alırsın. \n- `!para-gönder`: Birine Para Gönderirsin. \n- `!cash`: Kendi Parana Bakarsın. \n- `!satın-al`: Marketten Bir Şey Satın Alırsın!. \n- `!market`: Markete Bakarsın. \n<:yeni:1156436805613269033> KaraBorsaya erişmek için \`\!karaborsa\`\ \n<:yeni:1156436805613269033> Bahis oynamak için \`\!bahis-bilgi\`\ \n\n <:Rozet:1141661968428716132>**・Bağlantılar:**\n<:cs_link:1142129214749949962> [Destek Sunucum](https://discord.gg/q27D3qVXZ3)\n<:cs_link:1142129214749949962> [Bot Davet](https://discord.com/oauth2/authorize?client_id=1201982931468296283&permissions=8&scope=bot)\n<:cs_link:1142129214749949962> [Oy Ver](https://top.gg/bot/1141654216897732629)'); 

    message.channel.send({ embeds: [embed] });
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["ekonomi"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "ekonomi", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};