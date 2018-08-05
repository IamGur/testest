const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#';
const joinleave = '443668848193961995';
const logchannel = 'process.env.Bot_Log';
const rechannel = '443668814253654017';
const Dav = '324432889561219072';

//let statuses = ['!help', 'Hello!'];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.channels.get(logchannel).send('Bot logged in');

  //setInterval(function() {
    //let status = statuses[Math.floor(Math.random()*statuses.length)];
    //client.user.setPresence({game: {name: status }, status: 'online' });
    //client.user.setPresence({ activity: {name: status }, status: 'online'});
  //}, 10000)
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
client.on("guildCreate", guild => {
  const liveJoin = client.channels.get("443668848193961995"); 
  let liveJEmbed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setColor('RANDOM')
  .setTitle(`Your Bot Has Started Serving A Guild`)
  .setDescription(`**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Members Gained**: ${guild.memberCount}`)
  send(liveJoin, liveJEmbed, {
      name: `Tast`,
      icon: `https://cdn.discordapp.com/avatars/442956878700609546/46c8ba8875cab994b46da32c8c254c49.png?size=2048`
  })
});
client.on("guildDelete", guild => {
  const liveLeave = client.channels.get("443668848193961995"); 
  let liveLEmbed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setColor('RANDOM')
  .setTitle(`Your Bot Has Stopped Serving A Guild`)
  .setDescription(`**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Members Lost**: ${guild.memberCount}`)
  send(liveLeave, liveLEmbed, {
      name: `Tast`,
      icon: `https://cdn.discordapp.com/avatars/442956878700609546/46c8ba8875cab994b46da32c8c254c49.png?size=2048`
  })
});

client.login(process.env.BOTTOKEN);
