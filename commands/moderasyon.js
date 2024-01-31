const Discord = require('discord.js'); //modüller
const db = require("fera.db");

exports.run = async (client, message, args) => {
    const embed = new Discord.EmbedBuilder()
      .setColor('#08FFF8')
      .setTitle('Moderasyon Kategorisi')
      .setDescription('> <:icons_wumpus:1143615281709731981> Botun tüm sistemlerinin stabil bir şekilde çalışması için botun __rolünü__ üstte tutmaya özen gösterin. \n\n- `!ban-list`: Sunucunuzdaki banlı kişileri gösterir. \n- `/denetim-kaydı`: Sunucunuzdaki tüm olan bitenden haberdar olun. \n- `/buton-rol`: Buton rol sistemini kurarsınız. \n- `/capslock-engel`: Sunucunuzda büyük harfle yazımını engelersiniz. \n- `/küfür-engel`: Sunucunuzda küfür atmasını engelersiniz.. \n- `/reklam-engel`: Sunucunuzda link atılmasını engelersiniz. \n- `/yasaklı-kelime`: İstediğiniz kelimeyi sunucunuzda yazılmasını engelersiniz. \n> `/yasaklı-kelime-sıfırla `: Eklediğiniz kelimeleri sıfırlarsınız. \n\n <:Rozet:1141661968428716132>**・Bağlantılar:**\n<:cs_link:1142129214749949962> [Destek Sunucum](https://discord.gg/q27D3qVXZ3)\n<:cs_link:1142129214749949962> [Bot Davet](https://discord.com/oauth2/authorize?client_id=1201982931468296283&permissions=8&scope=bot)\n<:cs_link:1142129214749949962> [Oy Ver](https://top.gg/bot/1141654216897732629)'); 

    message.channel.send({ embeds: [embed] });
}
exports.conf = {
  enabled: true, //kullanıma açık mı değil mi
  guildOnly: true, //dmde kullanıma açık mı değil mi
  aliases: ["moderasyon"], //kısayollar
  permLevel: 0 //perm level mainde karşıliklar yazar
};
  
exports.help = {
 name: "moderasyon", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};