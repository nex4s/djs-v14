const config = require('../config');
const { PermissionFlagsBits, PermissionsBitField } = require('discord.js');
 
module.exports = {
  name: "messageCreate",
  async code(client, message) {
    if (message.author.bot) return;

    const prefix = config.prefix;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/g);
    const probably = args.shift()?.toLowerCase();
    if (!probably) return;
    
    const command = client.commands.message.get(probably) || 
                    client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(probably));
    if (!command) return;
    
    
    if (command.permissions && !message.guild.members.cache.get(message.user.id).permissions.has(command.permissions))
    return message.channel.send('You do not have the required permissions: ' + [].concat(command.permissions).join(', '));

    
    if (command.botPermissions && !message.guild.members.cache.get(client.user.id).permissions.has(command.botPermissions))
    return message.channel.send('I do not have the required permissions: ' + [].concat(command.botPermissions).join(', '));

      
    try {
      command.run(args, client, message);
    } catch (e) {
      console.log(e);
    }
  }
};
