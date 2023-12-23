const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Get my ping'),
    async run(client, interaction) {
        interaction.reply({content: "My current WS ping is " + client.ws.ping + 'ms'})
    }
}
