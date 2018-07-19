const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have permission to ban members');

    let member = message.mentions.members.first();
    if (!member) return message.channel.send('Please mention a member to ban!');
    if (!member.bannable) return message.channel.send('You cannot ban a member with role higher or equal than you');

    let reason = args.slice(1).join(' ');

    await member.ban(reason)
    .catch(e => console.log(e));

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setTitle('banned!')
    .setDescription(`${member.user.tag} has been banned!\nReason: ${reason}`)
    .setColor('RANDOM')
    .setTimestamp();
    message.channel.send(embed);
}