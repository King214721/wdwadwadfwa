const { EmbedBuilder } = require('discord.js');
const moment = require('moment');
moment.locale('TR')

    exports.run = (client, message, args) => {

        const member = message.mentions.members.first() || message.member
        const status = {
            online: '<:aktif:1146371766529306655> **Aktif**',
            idle: '<:idle:1146377451002396723> **Boşta**',
            dnd: '<:dnd:1146372054510215279> **Rahatsız Etmeyin**',
            offline: '<:offline:1146377213982294127> **Çevrimdışı**'
        }
const embed = new EmbedBuilder()
.setTitle("Kullanıcı Bilgi")
.setDescription(`<:darkuptime6:1142134346879340554> **Kullanıcı Adı:** ${member.user.username}\n<:ID:1143808005796798524> **Kullanıcı ID:** ${member.id}\n**Status:** ${status[member.presence.status]}\n<:cs_chat:1142129943568973824> **Hesap Oluşturulma Tarihi:** ${moment.utc(member.user.createdAt).format('LLLL')}\n<:cs_home:1142007023333019678> **Sunucuya Katılım Tarihi:** ${moment.utc(member.joinedAt).format('LLLL')}\n> **Rolleri :** ${member.roles.cache.map(role => role.toString())}`)
.setColor("#08FFF8")
        
        message.channel.send({embeds: [embed]})
    }
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["kb"],
        permLevel: 0
       };
       
       exports.help = {
          name: 'kullanıcı-bilgi',
        description: 'kullanıcı bilgi verir',
        usage: 'kb'
       };