const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.roles.cache.has('1175104911734743213')) return message.channel.send('> **Bu komutu kullanabilmek için Komut Kullanma rolüne sahip olmanız gerekiyor.** <:cs_reddet:1142405174548254802>  ');
    const member = message.mentions.members.first();
    const channel = message.guild.channels.cache.get(args[1]);
    if (!member) return message.channel.send('> **Bir kullanıcı etiketlemelisiniz.** <:cs_reddet:1142405174548254802>  ');
    if (!channel) return message.channel.send('> **Bir kanal ID girmelisiniz.** <:cs_reddet:1142405174548254802>  ');
    if (!member.voice.channel) return message.channel.send(`> **${member.displayName} adlı üye bir ses kanalında değil.** <:cs_reddet:1142405174548254802>  `);
    member.voice.setChannel(channel);
    message.channel.send(`> **${member.displayName} adlı üye ${channel.name} kanalına taşındı.** <:cs_onay:1142405258409156708> `);
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["taşı"],
    permLevel: 0
};

exports.help = {
    name: "taşı",
    description: "",
    usage: ""
};