const Discord = require('discord.js');
const Dav = '324432889561219072';

exports.run = async (client, message, args) => {

    if (message.author.id !== Dav) {
        message.reply('This Command Is Only For Bot Developer!');
        return;
    }
    let guilds = client.guilds.map((guild) => `**(${guild.name})**   (**Members:** ${guild.members.size})  (**Id:** ${guild.id})  (**Server Owner:** ${guild.owner.user.tag})`);
    message.channel.send(`I'm on **${client.guilds.size} Servers**:\n${guilds.join ('\n')}`, { split: "\n" })
}
