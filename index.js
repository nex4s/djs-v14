const { GatewayIntentBits, Client, Collection, Partials, SlashCommandBuilder} = require('discord.js')
const fs = require('fs')
const path = require('path')
const config = require('./config')
const { loadEvents, LoadCommands } = require('./handlers/functions')
const client = new Client({
    intents: [GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
    partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember]
})
client.commands = {
    slash: new Collection,
    message: new Collection
}

loadEvents(client, "./events")
LoadCommands(client, './commands')
client.login(config.token)