const Discord = require('discord.js');
const rechannel = '443668814253654017';
const prefix = '!';
const command = 'warn';

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("You can't warn someone.");
    let warnUser = message.mentions.members.first();
    if (!warnUser) return message.channel.send(`Mention a user to warn`);
    let args2 = message.content.substring(prefix.length + command.length).split(`<@${warnUser.user.id}>`);
    let reason = args2.join(" ").substring(3);
    if (!reason) return message.channel.send("You did not give a reason to warn the user.");
    if (!warnUser.id == message.author.id) return message.channel.send("You cannot warn yourself/!");
    message.delete().catch(err => bot.channels.get(rechannel).send(`${message.author.username} from ${message.guild.name} using warn command \n${err}`))
    warnUser.send(`***You have been warned from*** ${message.guild}. \n***Reason:*** ${reason}`).catch(err => {});
    message.channel.send(`*${warnUser.user.tag} has been warned*`)
}
