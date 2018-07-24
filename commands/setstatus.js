const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  if (message.author.id !== ('324432889561219072')) return message.channel.send("Huh.");
  const status = args.join(' ');
  if (status.length === 0) {
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription('❎ Name streaming status!');
    message.channel.send({ embed })
    message.react("❎");
  }

  else if (status.length !== 0) {
   client.user.setPresence({ game: { name: `${status}`, url: 'https://twitch.tv/', type: 1 } });
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('✅ You sucessfully changed streaming status');
  message.channel.send({ embed })
  message.react("✅");
}};
