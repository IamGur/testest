const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor('Hi' + message.author.username.toString(), message.author.displayAvatarURL)
    .setDescription(`Help Section \nPrefix = ! \nMore Commands Coming Soon😉`)
    .setThumbnail('https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048')
    .setColor('RANDOM')
    .addField('Bot Commands',`Ping - (Bot's ping) \nUptime (Bot's UpTime) \nInvite - (Bot Invite Link) `)
    .addField('Commands', `\nAvatar - (User's Avatar) \nUserinfo - (User Info) \nAscii -(Special Command) \nServerinfo (Server's Info) `)
    .addField('Modration command', `Purge/Delete - (Delete Multiple Messages)   \nKick -(Kick a user) \nBan - (Ban a user) \nWarn (Warn a user) \nRole (Add Role to user) \nRemoverole (Remove a role) `)
    .setFooter('Bot Developer Gur#9649 ', "https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048")
    .addField('Support Server', `[Link](https://discord.gg/b3g8r4Y)`, inline = true)
    .addField('Bot Invite Link', `[Invite](https://discordapp.com/api/oauth2/authorize?client_id=468715068834447361&permissions=8&scope=bot)`, inline = true)
    .setTimestamp();
    message.channel.send(embed)
}