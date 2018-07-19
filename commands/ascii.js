const figlet = require('figlet');

exports.run = (client, message, args) => {
    if (!args.join(' ')) return message.channel.send('Please provide text');
    figlet(args.join(' '), (err, data) => {
        message.channel.send(data, {
          code: 'ascii'
        });
    });
};