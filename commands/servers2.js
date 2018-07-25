const Dav = '324432889561219072';

exports.run = async (client, message, args) => {

    if (message.author.id !== Dav) {
        message.reply('This Command Is Only For Bot Developer!');
        return;
    }
    // Lets define our array of guilds
    const guildArray = client.guilds.map((guild) => {
    return `Server Name - ${guild.name} : Server id - ${guild.id} , Member- ${guild.members.size}`
    })
  
    // And send it
    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
}
