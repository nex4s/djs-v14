module.exports = {
    name: "ping",
    aliases: ['pong'],
    botPermissions: ["SendMessages"],
    async run(args, client, message) {
        message.channel.send({content: "My current WS ping is " + client.ws.ping + 'ms'})
    }
 }
