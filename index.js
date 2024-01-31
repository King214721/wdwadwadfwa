const {PermissionsBitField, EmbedBuilder, ButtonStyle, Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder } = require("discord.js");
const config = require("./config.js");
const fs = require("fs");
const db = require("fera.db");

const client = new Client({
  partials: [
    Partials.Message, // for message
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
    Partials.GuildScheduledEvent, // for guild events
    Partials.User, // for discord user
    Partials.ThreadMember, // for thread member
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildBans, // for manage guild bans
    GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildWebhooks, // for discord webhooks
    GatewayIntentBits.GuildInvites, // for guild invite managing
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.GuildPresences, // for user presence things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
    GatewayIntentBits.GuildMessageTyping, // for message typing things
    GatewayIntentBits.DirectMessages, // for dm messages
    GatewayIntentBits.DirectMessageReactions, // for dm message reaction
    GatewayIntentBits.DirectMessageTyping, // for dm message typinh
    GatewayIntentBits.MessageContent, // enable if you need message content things
  ],
});
//HOST
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Web Server Başladı.'));

app.listen(port, () =>
    console.log(`Bot bu adres üzerinde çalışıyor: http://localhost:${port}`)
);
module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.login(process.env.TOKEN)



//coin
const jsonFilePath = 'database.json';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateCoinFiyat() {
  let coinData = {};

  try {
    const data = fs.readFileSync(jsonFilePath, 'utf-8');
    coinData = JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error); 
  }

  const randomNum = getRandomNumber(1, 2);
  const changeAmount = Math.random() * (randomNum==2?6:0.2); // Rastgele artış veya azalış miktarı (maksimum 0.5)

  if (randomNum === 1) {
    // BitCoin düşer
    coinData.coin -= changeAmount;
    console.log('BitCoin düştü! Yeni coin fiyatı:', coinData.coin);
  } else {
    // BitCoin artar
    coinData.coin += changeAmount;
    console.log('BitCoin yükseldi! Yeni coin fiyatı:', coinData.coin);
  }

  try {
    coinData.coin = Math.floor(coinData.coin);
    fs.writeFileSync(jsonFilePath, JSON.stringify(coinData, null, 2));
  } catch (error) {
    console.error('Error writing JSON file:', error);
  }
}
///coin

//dolar

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateDolarFiyat() {
  let dolarData = {};

  try {
    const data = fs.readFileSync(jsonFilePath, 'utf-8');
    dolarData = JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error); 
  }

  const randomNum = getRandomNumber(1, 2);
  const changeAmount = Math.random() * (randomNum==2?6:0.2); // Rastgele artış veya azalış miktarı (maksimum 0.5)

  if (randomNum === 1) {
    // Dolar düşer
    dolarData.dolar -= changeAmount;
    console.log('Dolar düştü! Yeni dolar fiyatı:', dolarData.dolar);
  } else {
    // Dolar artar
    dolarData.dolar += changeAmount;
    console.log('Dolar yükseldi! Yeni dolar fiyatı:', dolarData.dolar);
  }

  try {
    dolarData.dolar = Math.floor(dolarData.dolar);
    fs.writeFileSync(jsonFilePath, JSON.stringify(dolarData, null, 2));
  } catch (error) {
    console.error('Error writing JSON file:', error);
  }
}
///dolar
///euro
function updateEuroFiyat() {
  let euroData = {};

  try {
    const data = fs.readFileSync(jsonFilePath, 'utf-8');
    euroData = JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error); 
  }

  const randomNum = getRandomNumber(1, 2);
  const changeAmount = Math.random() * (randomNum==2?6:0.3); // Rastgele artış veya azalış miktarı (maksimum 0.5)

  if (randomNum === 1) {
    // Euro düşer
    euroData.euro -= changeAmount;
    console.log('Euro düştü! Yeni euro fiyatı:', euroData.euro);
  } else {
    // Euro artar
    euroData.euro += changeAmount;
    console.log('Euro yükseldi! Yeni euro fiyatı:', euroData.euro);
  }
  
  try {
    euroData.euro = Math.floor(euroData.euro);
    fs.writeFileSync(jsonFilePath, JSON.stringify(euroData, null, 2));
  } catch (error) {
    console.error('Error writing JSON file:', error);
  }
}

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);

  // Belirli aralıklarla updateDolarFiyat fonksiyonunu çağırmak için zamanlayıcı
  setInterval(updateDolarFiyat, 50 * 60 * 100); // 50 dakika
  setInterval(updateEuroFiyat, 50 * 60 * 100); // 50 dakika
  setInterval(updateCoinFiyat, 50 * 60 * 100); // 50 dakika
});