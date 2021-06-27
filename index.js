const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.on("ready", () => {
    client.user.setActivity(`on ${client.guilds.cache.size} servers`);
    console.log(`Ready to serve on ${client.guilds.cache.size} servers, for ${client.users.cache.size} users.`);
  });



client.login(process.env.DISCORD_TOKEN);