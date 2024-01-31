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

  const eksipara = adet * dolar;

  if (eksipara > para) {
    return message.reply('> **Yeterli miktarda dolara sahip değilsiniz.**');
  }

  db.add(`para.${userId}`, eksipara);
  db.subtract(`cdolar.${userId}`, adet);

 const embed = new Discord.EmbedBuilder()
    .setColor('#00ff00')
    .setTitle('<:dolarnv:1143966160656805908> Dolar Satış İşlemi Başarılı!')
    .setDescription(`> **Başarıyla \`\ ${adet} \`\ adet dolar sattınız!** \n> **Kazanç** \`\ ${eksipara} \`\ \n> **Kalan Dolar** \`\ ${cdolar - adet} \`\ \n> **Cash** \`\ ${para} \`\ `)


  return message.reply({ embeds: [embed] });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dolar-sat'],
  permLevel: 0
};

exports.help = {
  name: 'dolar-sat',
  description: 'Belirtilen miktarda doları satın.',
  usage: 'dolar-sat <miktar>'
};