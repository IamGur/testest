const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    let user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Info`, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .setColor('RANDOM')
    .addField('Username', user.username, true)
    .addField('Discrim', user.discriminator, true)
    .addField('Status', user.presence.status, true)
    .addField('Bot?', user.bot, true)
    .setThumbnail(user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(embed)
}