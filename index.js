const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    client.user.setActivity(`on ${client.guilds.cache.size} servers`);
    console.log(`Ready to serve on ${client.guilds.cache.size} servers, for ${client.users.cache.size} users.`);
  });




token = 'ODU4NTA3NzUzMTU2NTA5NzA2.YNfJpg.MKCQ-ddsEHJ1NLQ4G34yhYuOL-s';
client.login(token);