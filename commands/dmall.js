const Discord = require('discord.js');

exports.run = async (client, message, args) => {
let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply({embed: {
          color: 0xC64540,
          description: "No permission."
        }});
    let DMALL = args.join(" ").slice(0);
  if (!DMALL) return message.channel.send({embed: {
    color: 0xC64540,
    description: `${message.member} Please enter a message to dm all the players in the discord server.`
  }});

  message.guild.members.forEach((player) => {
      message.guild.member(player).send({embed: {
        color: 0x00c1c1,
        title: `${message.guild.name}`,
        description: `${DMALL}`
      }});
  });
  message.channel.send({embed: {
    color: 0xC64540,
    description: "All players in this discord server have got your message."
}});
}
