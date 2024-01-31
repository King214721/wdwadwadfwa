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

  const eksipara = adet * coin;

  if (eksipara > para) {
    return message.reply('> **Yeterli miktarda BitCoine sahip değilsiniz.**');
  }

  db.add(`para.${userId}`, eksipara);
  db.subtract(`ccoin.${userId}`, adet);

 const embed = new Discord.EmbedBuilder()
    .setColor('#00ff00')
    .setTitle('<:icons8bitcoin48:1202274825973006427> BitCoin Satış İşlemi Başarılı!')
    .setDescription(`> **Başarıyla \`\ ${adet} \`\ adet BitCoin sattınız!** \n> **Kazanç** \`\ ${eksipara} \`\ \n> **Kalan BitCoin** \`\ ${ccoin - adet} \`\ \n> **Cash** \`\ ${para} \`\ `)


  return message.reply({ embeds: [embed] });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bitcoin-sat','bitcoin sat','btc sat'],
  permLevel: 0
};

exports.help = {
  name: 'btc-sat',
  description: 'Belirtilen miktarda bitcoin satın.',
  usage: 'bitcoin-sat <miktar>'
};