const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(isNaN(args[0])) return message.channel.send('Please provide a valid amount to purge or dedete messages!');
    if (args[0] >100) return message.channel.send('Supply a amount less then 100!');

    message.channel.bulkDelete(args[0])
};