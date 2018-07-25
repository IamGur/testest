const Dav = '324432889561219072';

exports.run = (client, message, args) => {

    if (message.author.id !== Dav) {
        message.reply('This Command Is Only For Bot Developer!');
        return;
    }
    let say = args.join(' ');
    message.delete();
    message.channel.send(say);
}
