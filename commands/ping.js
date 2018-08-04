const Discord = require('discord.js')

exports.run = async (client, message, args, color) => {

    let start = Date.now(); message.channel.send('Pong! ').then(message => { 
    let diff = (Date.now() - start); 
    let API = (client.ping).toFixed(2)
        
        let embed = new Discord.RichEmbed()
        .setTitle(`🎉 Pong!`)
        .setColor('RANDOM')
        .addField("📶 Latency", `${diff}ms`, true)
        .addField("💻 API", `${API}ms`, true)
        .setTimestamp();
        message.edit(embed);
    });
}
