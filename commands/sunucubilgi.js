const Discord  = require('discord.js');
const { EmbedBuilder } = require("discord.js")

module.exports.run = async (bot, msg, args) => {
    const server = msg.guild

    let serverSize = server.memberCount;
    let botCount = server.members.cache.filter(m => m.user.bot).size;;
    let aktif = server.members.cache.filter(member => member.presence && (member.presence.status != "offline")).size
    const owner = server.members.cache.get(server.ownerId);
    function checkDays(date) {
                let now = new Date();
                let diff = now.getTime() - date.getTime();
                let days = Math.floor(diff / 86400000);
                return days + (days == 1 ? " gün" : " gün") + " önce";
            }
    ///

    const embed = new EmbedBuilder().setTitle(`${server.name} Hakında Bilgi!`).setColor("White").addFields({ name: `<:cs_home:1142007023333019678> **Sunucu İsmi :**`, value : `${server.name}`}, { name : '<:ID:1143808005796798524> **Sunucu ID :**', value : `${server.id}` }, { name : '<:Manager:1142897779040075988> **Sunucu Sahibi :**', value : `${owner.user.tag}` }, { name : '<:icons_clock:1143614816762732675> **Kuruluş Tarihi :**', value : `${checkDays(server.createdAt)}` }, { name : '<a:boost:1156586420761280632> **Boost sayısı :**', value : `${server.premiumSubscriptionCount}` }, { name : '<:aktif:1146371766529306655> **Aktif üye sayısı :**', value : `${aktif}`}, { name : `<:yeler:1142134346879340554> **Toplam Üye :**`, value : `${serverSize - botCount}` },{ name : '<:cs_bots:1142130266429739038> **Toplam Bot :**', value : `${botCount}`}, { name : '<:emoji_2:1142690857263304704> **Rol Sayısı :**', value : `${server.roles.cache.size}`}).setThumbnail(server.iconURL({dynamic : true}))
    msg.channel.send({embeds : [embed]});

};  

exports.conf = {
    aliases: ['sunucu-bilgi','sb'],
  };
 
  exports.help = {
    name: 'sunucu',
 
  };