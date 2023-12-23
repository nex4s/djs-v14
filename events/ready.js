const { ActivityType, REST, Routes, ClientUser, Collection } = require('discord.js');
const config = require('../config')

module.exports = {
    name: "ready",
    async code(client) {
        const cmdsArr = client.commands
        const rest = new REST().setToken(config.token);
rest.put(Routes.applicationCommands(client.user.id), { body: [...cmdsArr.slash.values()].map(x => x.data.toJSON())


});


        console.log('Client is alive')
        client.user.setActivity({ name: "holding a key grip", type: ActivityType.Watching }); 

        }
}