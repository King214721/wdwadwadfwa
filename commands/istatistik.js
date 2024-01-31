const {EmbedBuilder} = require("discord.js");
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
exports.run = async (client, message, args) => {
  const Uptime = moment
  .duration(client.uptime)
  .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new EmbedBuilder()
    .addFields({ name: '<:Manager:1142897779040075988> **Bot Sahibi**', value: `flybuny`, inline: false})
    .addFields({ name: '<:cs_bots:1142130266429739038> **Bellek Kullanımı**', value: `${(process.memoryUsage().heapUsed /1024 /512).toFixed(2)}MB`, inline: true})
    .addFields({ name: '<:icons_clock:1143614816762732675> **Çalışma Süresi**', value: `${Uptime}`, inline: true})
    .addFields({ name: '<:yeler:1142134346879340554> **Kullanıcılar**', value: `${client.users.cache.size}`, inline: false})
    .addFields({ name: '<:cs_home:1142007023333019678> **Sunucular**', value: `${client.guilds.cache.size}`, inline: false})
    .addFields({ name: '<:cs_chat:1142129943568973824> **Kanallar**', value: `${client.channels.cache.size}`, inline: false})
    .addFields({ name: '<:icons_settings:1143615207046905916> **İşletim Sistemi**', value: `Windows 64 Bit`, inline: false})
    .addFields({ name: '<:icons_settings:1143615207046905916> **İşlemci**', value: `${os.cpus().map(i => `${i.model}`)[0]}`, inline: false})
    .addFields({ name: '<:cs_bots:1142130266429739038> **Discord.JS sürüm**', value: `14.2.0`, inline: true})
    .addFields({ name: '<:cs_bots:1142130266429739038> **Node.JS sürüm**', value: `v16.14.2`, inline: true})
    .addFields({ name: '<:cs_bots:1142130266429739038> **Bot Kuruluş**', value: `17.08.2023`, inline: true})
    .addFields({ name: '<:cs_bots:1142130266429739038> **Ping**', value: `${client.ws.ping}`, inline: true})
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ["i"]
};

exports.help = {
  name: "istatistik"
};