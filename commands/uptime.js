const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    var days = Math.floor(client.uptime / 86400000000000);
    var hours = Math.floor(client.uptime / 3600000);
    var minutes = Math.floor((client.uptime % 3600000) / 60000);
    var seconds = Math.floor(((client.uptime % 360000) % 60000) / 1000);
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Uptime', `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`)
        .setTimestamp();
    message.channel.send(embed);
}