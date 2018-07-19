const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    let guilds = client.guilds.map((guild) => `**${guild.name}** members: ${guild.members.size} id: (${guild.id})`);
    message.channel.send(`I'm on **${client.guilds.size} Servers**:\n${guilds.join ('\n')}`, { split: "\n" })
}