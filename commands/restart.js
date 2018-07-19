const Discord = require('discord.js');
const Dav = '324432889561219072';

exports.run = async (client, message, args) => {

    if (message.author.id !== Dav) {
        message.reply('This Command Is Only For Bot Developer!');
        return;
    }
    message.channel.send("bot restarting");
    process.exit()
}