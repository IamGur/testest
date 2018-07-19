const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let user = message.mentions.users.first() || message.author;

    let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}`)
    .setImage(user.displayAvatarURL)
    .setColor('RANDOM')
    .setTimestamp();
    message.channel.send(embed)
}
