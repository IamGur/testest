const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You don\'t have permission!');
    let member = message.mentions.members.first() || message.guild.message.members.get(args[0]);
    if (!member) return message.channel.send('Please mention a member to kick');
    if (!member.kickable) return message.channel.send('You cannot kick a member with a role higher or equal then you!')

    let reason = args.slice(1).join(' ');

    await member.kick(reason)
    .catch(error => message.channel.send(`Sorry I couldn't kick, Error: ${error}`));

    let kickEmbed = new Discord.RichEmbed()
    .setTitle('kicked😉!')
    .setDescription(`${member.user.tag} has been kicked for ${reason}`)
    .setColor('RANDOM')
    .setTimestamp();
    message.channel.send(kickEmbed);

}