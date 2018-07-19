const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MEMBERS')) return message.reply("Sorry, you can't do that.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Couldn't find that user.");
    let role = args.join (" ").slice(22);
    if(!role) return message.reply('Specify a role!');
    let gRole = message.guild.roles.find('name', role);
    if (!gRole) return message.reply("Couldn't find that role.");

    if(!rMember.roles.has(gRole.id)) return message.channel.send(`They don't have ${gRole.name}'s role.`);
    await (rMember.removeRole(gRole.id));

    try{
      await rMember.send(`${gRole.name} role has removed.`)  
    }catch(e){
      message.channel.send(`<@${rMember.id}>, ${gRole.name} role has removed.`)
    }
};