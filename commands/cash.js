const Discord = require('discord.js'); //modüller
const db = require("fera.db");


exports.run = async (client, message, args) => {
  const userId = message.author.id;
  const user = message.mentions.users.first() || message.author;
  const paraAmount = db.get(`para.${userId}`) || 0;
  const dolarAmount = db.get(`cdolar.${userId}`) || 0;
  const bitcoinAmount = db.get(`ccoin.${userId}`) || 0;
  const euroAmount = db.get(`ceuro.${userId}`) || 0;
  const embed = new Discord.EmbedBuilder()
    .setColor('#030303')
    .setTitle('<:cs_home:1142007023333019678> Hesabın')
    .setDescription(`- **Paran**\n> <:moneysbag:1155848811734904944> **Cash:** \`\ ${paraAmount}\`\ \n\n- **Dövizlerin** \n> <:dolarnv:1143966160656805908> **Dolar :** \`\ ${dolarAmount}\`\ \n> <:euronv:1152975914876018720> **Euro :** \`\ ${euroAmount}\`\ \n\n- **Coinlerin**\n> <:icons8bitcoin48:1202274825973006427> **Bitcoin :** \`\ ${bitcoinAmount}\`\ `)
    .setTimestamp();

  message.reply({ embeds: [embed] });
}
exports.conf = {
 enabled: true, //kullanıma açık mı değil mi
 guildOnly: true, //dmde kullanıma açık mı değil mi
 aliases: ["bakiye","h","hesabım"], //kısayollar
 permLevel: 0 //perm level mainde karşıliklar yazar
};

exports.help = {
 name: "cash", //komutu çalıştıracak olan kelime
 description: "",//açıklama (isteğe bağlı)
 usage: ""//kullanım (isteğe bağlı)
};