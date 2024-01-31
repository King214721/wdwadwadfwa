const db = require("fera.db");
const ms = require("ms");
exports.run = async(client, message, args) => {
    let yavaşmod = 8.64e+7, 

        amount = Math.floor(Math.random() * 1000) + 4000;      


    let lastDaily = await db.fetch(`cal.${message.author.id}`);

    if (lastDaily !== null && yavaşmod - (Date.now() - lastDaily) > 0) {

        let timeObj = ms(yavaşmod - (Date.now() - lastDaily));




      
      return message.reply(`**Günde 1 kere hırsızlık yapabilirsin!** <:cs_reddet:1142405174548254802>`)

      

    } else {
 let kullanıcı = message.mentions.users.first()
 if (!kullanıcı) return message.reply("**Lütfen bir kullanıcı etiketleyin!** <:cs_reddet:1142405174548254802>")
 let parasi = db.fetch(`para.${kullanıcı.id}`)
 if (!parasi) return message.reply("**Kullanıcının parası yok** <:cs_reddet:1142405174548254802>")
  let miktarsonuç = Math.floor(Math.random() * 99) + 1
  db.add(`para.${message.author.id}`, miktarsonuç)
    db.add(`para.${kullanıcı.id}`, -miktarsonuç)
    db.set(`cal.${message.author.id}`, Date.now());

    message.channel.send(`${message.author} <@${kullanıcı.id}> Kullanıcısından **${miktarsonuç}** TL çaldı! \n Yaptığın ayıp...`)
};
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'çal' 
  }
