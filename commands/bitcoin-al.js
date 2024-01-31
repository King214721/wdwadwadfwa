const Discord = require('discord.js'); //modüller
const db = require("fera.db");

exports.run = async (client, message, args) => {
  const userId = message.author.id;
  const para = db.fetch(`para.${userId}`);
  const ccoin = db.fetch(`ccoin.${userId}`);
  const coin = db.fetch(`coin`);
  const adet = parseInt(args[0]);

  if (isNaN(adet) || adet <= 0) {
    return message.reply('> **Lütfen geçerli bir adet girin.**');
  }

  const toplampara = adet * coin;

  if (toplampara > para) {
    return message.reply('> **Yeterli miktarda cash yok**');
  }

  db.subtract(`para.${userId}`, toplampara);
  db.add(`ccoin.${userId}`, adet);

 const embed = new Discord.EmbedBuilder()
    .setColor('#00ff00')
    .setTitle('<:icons8bitcoin48:1202274825973006427> Bitcoin Satın Alma İşlemi Başarılı!')
    .setDescription(`> **Başarıyla \`\ ${adet} \`\ adet coin satın aldınız!** \n> **Toplam Tutar** \`\ ${toplampara} \`\ \n> **Kalan Cash** \`\ ${para - toplampara} \`\ `)



  return message.reply({ embeds: [embed] });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bitcoin-al','bitcoin al','btc al'],
  permLevel: 0
};

exports.help = {
  name: 'btc-al',
  description: 'Belirtilen miktarda coin satın alın.',
  usage: 'bitcoin-al <miktar>'
};