exports.run = (client, message, args) => {
    let say = args.join(' ');
    message.delete();
    message.channel.send(say);
}