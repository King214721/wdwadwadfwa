// code in commands/ban.js transformed to JavaScript
const Discord = require('discord.js');
const db = require('fera.db');

async function banCommand(client, message, args) {
  const userId = message.author.id;
  const user = message.mentions.users.first();
  const reason = args.slice(1).join(' ');
  if (!user) {
    return message.reply('> **Lütfen yasaklanacak kullanıcıyı belirtin** <:cs_reddet:1142405174548254802>');
  }
  if (!message.member.permissions.has('BAN_MEMBERS')) {
    return message.reply('> **Bu komutu kullanma izniniz yok.** <:cs_reddet:1142405174548254802>');
  }
  if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) {
    return message.reply('> **Bu kullanıcı sizden daha yüksek bir role sahip.** <:cs_reddet:1142405174548254802>');
  }
  try {
    await user.ban({ reason: reason });
    const embed = new Discord.MessageEmbed()
      .setColor('#08FFF8')
      .setTitle('Ban')
      .setDescription(`> <:cs_ban:1142094884216508519> **Banlanan kullanıcı :** ${user.tag}\n> <:Icons_Guardian:1143615495052992513> **Banlayan Yetkili :** ${message.author.tag}\n> <:reason:1143808209925185556> **Sebep :** ${reason}`);
    message.channel.send({ embeds: [embed] });
  } catch (error) {
    console.error(error);
    message.reply('> **Kullanıcıyı yasaklamaya çalışırken bir hata oluştu** <:cs_warn2:1142138650314952795>');
  }
}

module.exports = {
  run: banCommand,
  conf: {
    enabled: true,
    guildOnly: true,
    aliases: ["ban"],
    permLevel: 0
  },
  help: {
    name: "ban",
    description: "",
    usage: "!ban @username <sebep>"
  }
};