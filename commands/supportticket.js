exports.run = async (client, message, args) => {
    var discord = require('discord.js');
    var db = require('quick.db')
    var send = require('quick.hook')
    
    let cmdList = [
        "cmd1",
        "cmd2",
        "cmd3"
    ] //replace below == cmdList if you want to base it off commands.

    if(!`${args[0]}` == String) return send(message.channel, `When sending a support ticket. Please Use This Type Of Example.\n**Usage**: \`-!support <command> <fault>\``, {
        name: `Support Error`,
        icon: `https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/server-512.png`
    })
    if(!message.member.hasPermission("SEND_MESSAGES")) return;
    
    let fault = args.slice(1, 1000, args[0]).join(' ');
    if (!fault == String) return send(message.channel, `The Fault You Provided Is Invalid. Please Use This Type Of Example.\n**Usage**: \`-!support <command> <fault>\``, {
        name: `Support Error`,
        icon: `https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/server-512.png`
    })

    const casenumbers = new db.table('CASE_NUMBER')
    const casenumber = await casenumbers.fetch(`SupportCases`)
    const a = casenumber
    const b = a + 1
    casenumbers.set(`SupportCases`, b)

	if (!casenumbers.fetch(`SupportCases`) == null) { //THIS IS THE FIX <---- If you do not have the database it will start with null.. <3 Zinx#9129, Thanks to TeXusAK#2253 For Making Me Realise
        await casenumbers.set(`SupportCases`, 0)
    }

    let supportEmbed = new discord.RichEmbed()
    .setTitle(`Support System || Ticket Created`)
    .setColor("ORANGE")
    .setDescription(`**Your Case Number**: ${casenumber}`)
    .addField(`**Your Case Problem**:`, `Command: ${args[0]}\nIssue: ${fault}`)
    .setFooter(`BOT System Support || [Case Finder](https://discord.gg/pjxr499)`)
    .setTimestamp()
    send(message.channel, supportEmbed, {
        name: `BOT Life Support`,
        icon: `https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/search-512.png`
    })

    const errorReport = bot.channels.get("696969696969696969"); // PLEASE CHANGE - THIS IS TO ALERT YOUR CHOSEN SERVER TO RECIEVE THE ALERTS
    let supportDevEmbed = new discord.RichEmbed()
    .setTitle(`Support System || Ticket Created`)
    .setColor("ORANGE")
    .setDescription(`**Case Number**: ${casenumber}`)
    .addField(`**Case Problem**:`, `Command: ${args[0]}\nIssue: ${fault}`)
    .addField(`**Case Created By**:`, `${message.member}`)
    .setFooter(`BOT System Support`)
    .setTimestamp()
    send(errorReport, supportDevEmbed, {
        name: `BOT Life Support`,
        icon: `https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/search-512.png`
    })

}
