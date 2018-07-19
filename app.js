const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const joinleave = '443668848193961995';
const logchannel = '443668654580826123';
const rechannel = '443668814253654017';
const Dav = '324432889561219072';

let statuses = ['!help', 'Hello!'];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.channels.get(logchannel).send('Bot logged in');

  setInterval(function() {
    let status = statuses[Math.floor(Math.random()*statuses.length)];
    client.user.setPresence({game: {name: status }, status: 'online' });
    //client.user.setPresence({ activity: {name: status }, status: 'online'});
  }, 10000)
});

client.on('disconnect', function() {
  console.log('Bot disconnected');
  client.channels.get(logchannel).send('bot disconnected');
  process.exit(1);
});
// Create an event listener for messages
client.on('message',async message => {

  if (message.author.bot) return undefined;

  let msg = message.content.toLowerCase();
  let args = message.content.slice(prefix.length).trim().split(' ');
  let command = args.shift().toLowerCase();


  try {
    if (command === 'ui') command = 'userinfo';
    if (command === 'delete') command = 'purge';
    if (command === 'clean') command = 'purge';
    if (command === 'up') command = 'uptime';
    if (command === 'rrole') command = 'removerole'
    if (command === 'addrole') command = 'role';
    let commands = require(`./commands/${command}.js`);
    commands.run(client, message, args);
  } catch(e){
    console.log(e.stack)
  } finally {
    console.log(command)
  }
})
client.on("guildCreate", guild => { client.channels.get(joinleave).send(`New server joined: ${guild.name} (id: ${guild.id}). This server has ${guild.memberCount} members! and owner is ${guild.owner.user.username} now im in ${client.guilds.size} servers`); });

client.on('guildDelete', guild => {
    client.channels.get(joinleave).send(`Removed from ${guild.name} (id: ${guild.id}). and it was owned by ${guild.owner.user.username} (owner id: ${guild.owner.id}) now im in ${client.guilds.size} servers`);
});


client.login('process.env.BOTTOKEN');