const db = require("fera.db");
const ms = require('ms');
const moment = require("moment");
exports.run = async (client, message, args) => {
  
 var paralar = ['15','15','15','50','50','50','100','100','150','250','300','500'];
      var para = paralar[Math.floor(Math.random() * paralar.length)];

  let yavaşmod = 8.64e+7, 

        amount = Math.floor(Math.random() * 1000) + 4000;      


    let lastDaily = await db.fetch(`günlük.${message.author.id}`);

    if (lastDaily !== null && yavaşmod - (Date.now() - lastDaily) > 0) {

        let timeObj = ms(yavaşmod - (Date.now() - lastDaily));




      
      return message.reply(`**Sadece 24 saatte bir cash alabilirsin!** <:cs_reddet:1142405174548254802> `)

      

    } else {

     db.add(`para.${message.author.id}`, para)
message.channel.send(`> **Çalışarak <:moneysbag:1155848811734904944> ${para} kadar Cash kaptın!**`);
       db.set(`günlük.${message.author.id}`, Date.now());
    }
    }


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'çalış'
  }
