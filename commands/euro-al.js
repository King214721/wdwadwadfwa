const Discord = require('discord.js'); //modüller
const db = require("fera.db");

exports.run = async (client, message, args) => {
  const userId = message.author.id;
  const para = db.fetch(`para.${userId}`);
  const ceuro = db.fetch(`ceuro.${userId}`);
  const euro = db.fetch(`euro`);
  const adet = parseInt(args[0]);

  if (isNaN(adet) || adet <= 0) {
    return message.reply('> **Lütfen geçerli bir adet girin.**');
  }

  const toplampara = adet * euro;

  if (toplampara > para) {
    return message.reply('> **Yeterli miktarda cash yok**');
  }

  db.subtract(`para.${userId}`, toplampara);
  db.add(`ceuro.${userId}`, adet);

 const embed = new Discord.EmbedBuilder()
    .setColor('#00ff00')
    .setTitle('<:euronv:1143966160656805908> Euro Satın Alma İşlemi Başarılı!')
    .setDescription(`> **Başarıyla \`\ ${adet} \`\ adet euro satın aldınız!** \n> **Toplam Tutar** \`\ ${toplampara} \`\ \n> **Kalan Cash** \`\ ${para - toplampara} \`\ `)


  
  return message.reply({ embeds: [embed] });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['euro-al'],
  permLevel: 0
};

exports.help = {
  name: 'euro-al',
  description: 'Belirtilen miktarda euro satın alın.',
  usage: 'euro-al <miktar>'
};