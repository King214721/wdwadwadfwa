const { EmbedBuilder } = require("discord.js");
const db = require("fera.db");

exports.run = async (client, message, args) => {
    const userId = message.author.id;
    const miktar = parseInt(args[0]);
    const user = message.mentions.users.first() || message.author;
    const paraAmount = db.get(`para.${userId}`) || 0;
    const money = db.get(`para.${message.author.id}`);
    if (!money) return message.channel.send("**Paranız yok.** <:cs_reddet:1142405174548254802>");

    const moneyPush = parseInt(args[0]);
    if (isNaN(moneyPush) || moneyPush <= 0) return message.channel.send("**Lütfen geçerli bir miktar girin!** <:cs_reddet:1142405174548254802>");

    if (money < moneyPush) return message.channel.send("**Yeterli paranız yok!** <:cs_reddet:1142405174548254802>");

    const mapping = ["false","true"];
    const randomMapping = mapping[Math.floor(Math.random() * mapping.length)];

    const paraCevriliyorMsg = await message.channel.send(`${user} Çevirdi: \`${miktar}\` \n> **Çevriliyor** <a:5bcf3:1166384556119699457>`);

    setTimeout(() => {
        if (randomMapping === "true") {
            paraCevriliyorMsg.edit(`${user} Çevirdi: \`${miktar}\` \n> **Kazandınız** <:tail:1177993494342680707>`);
            db.add(`para.${message.author.id}`, moneyPush * 2);
        } else {
            paraCevriliyorMsg.edit(`${user} Çevirdi: \`${miktar}\` \n> **Kaybettiniz** <:tail:1177993494342680707>`);
            db.add(`para.${message.author.id}`, -moneyPush);
        }
    }, 2000);
};

exports.conf = {
    aliases: []
};

exports.help = {
    name: "cf"
};