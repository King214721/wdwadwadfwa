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

  const eksipara = adet * euro;

  if (eksipara > para) {
    return message.reply('> **Yeterli miktarda euroya sahip değilsiniz.**');
  }

  db.add(`para.${userId}`, eksipara);
  db.subtract(`ceuro.${userId}`, adet);

 const embed = new Discord.EmbedBuilder()
    .setColor('#00ff00')
    .setTitle('<:euronv:1152975914876018720> Euro Satış İşlemi Başarılı!')
    .setDescription(`> **Başarıyla \`\ ${adet} \`\ adet euro sattınız!** \n> **Kazanç** \`\ ${eksipara} \`\ \n> **Kalan Euro** \`\ ${ceuro - adet} \`\ \n> **Cash** \`\ ${para} \`\ `)


  return message.reply({ embeds: [embed] });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['euro-sat'],
  permLevel: 0
};

exports.help = {
  name: 'euro-sat',
  description: 'Belirtilen miktarda euroı satın.',
  usage: 'euro-sat <miktar>'
};