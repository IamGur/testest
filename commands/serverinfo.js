const Discord = require('discord.js');


exports.run = async (client, message, args) => {
    let online = message.guild.members.filter(m => m.user.presence.status !== "offline").size;
    let offline = message.guild.members.filter(m => m.user.presence.status === "offline").size;
    let sicon = message.guild.iconURL == null ? "https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048" : message.guild.iconURL;
    let embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name + "info", sicon)
        .setColor('RANDOM')
        .setDescription('Server Info')
        .addField('Server Owner:', message.guild.owner.user.tag)
        .addField('Owner id:', message.guild.owner.id)
        .addField('Members:', `Online ${online}/Offline ${offline}`, inline = true)
        .addField('Totel Roles:', message.guild.roles.size)
        .addField('Text channel:', message.guild.channels.filter(e => e.type !== 'voice').size)
        .addField('Voice channels:', message.guild.channels.filter(e => e.type === 'voice').size)
        .addField('Server Region:', message.guild.region)
        .addField('Server Created At', message.guild.createdAt)
        .setThumbnail(message.guild.iconURL)
        .setFooter('Developer Gur#9649 ', "https://cdn.discordapp.com/avatars/324432889561219072/4ab54e95443797898a1983feca3af755.png?size=2048")
        .setTimestamp();
    message.channel.send(embed);
}
