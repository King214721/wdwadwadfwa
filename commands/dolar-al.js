const Discord = require('discord.js'); //modüller
const db = require("fera.db");

exports.run = async (client, message, args) => {
  const userId = message.author.id;
  const para = db.fetch(`para.${userId}`);
  const cdolar = db.fetch(`cdolar.${userId}`);
  const dolar = db.fetch(`dolar`);
  const adet = parseInt(args[0]);

  if (isNaN(adet) || adet <= 0) {
    return message.reply('> **Lütfen geçerli bir adet girin.**');
  }

  const toplampara = adet * dolar;

  if (toplampara > para) {
    return message.reply('> **Yeterli miktarda cash yok**');
  }

  db.subtract(`para.${userId}`, toplampara);
  db.add(`cdolar.${userId}`, adet);

 const embed = new Discord.EmbedBuilder()
    .setColor('#00ff00')
    .setTitle('<:dolarnv:1143966160656805908> Dolar Satın Alma İşlemi Başarılı!')
    .setDescription(`> **Başarıyla \`\ ${adet} \`\ adet dolar satın aldınız!** \n> **Toplam Tutar** \`\ ${toplampara} \`\ \n> **Kalan Cash** \`\ ${para - toplampara} \`\ `)


  
  return message.reply({ embeds: [embed] });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dolar-al'],
  permLevel: 0
};

exports.help = {
  name: 'dolar-al',
  description: 'Belirtilen miktarda dolar satın alın.',
  usage: 'dolar-al <miktar>'
};