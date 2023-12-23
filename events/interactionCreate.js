module.exports = {
    name: "interactionCreate",
    async code(client, interaction) {
        let i = interaction

        
        if(i.isChatInputCommand()) {
            const command = client.commands.slash.get(i.commandName);
            if (!command) return;
      
            try { command.run(client, interaction); }
            catch { i.reply({ content: "Something went wrong!", ephemeral: true }) }
        }
    
    }
  }
