const config = require('../config.js'); // Configurações do bot.
const Discord = require('discord.js'); // Api do Discord.js

exports.run = (client, message) => { // Exportação do evento.
    
    if(message.channel.type === 'dm') return; // O bot não reponde comandos enviados no privado.    
    if(message.author.bot) return; // O bot não responde outros bots.

    let prefix = config.PREFIX; // Prefix padrão do bot

    if(message.content.indexOf(prefix) !== 0) return; // Aqui o bot não reponde outros prefixos.

    // Definição do Args.
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    // Aqui definimos "commandFile" para buscar os comandos na collection que está la na index
    const commandFile = client.commands.get(command) || client.commands.get(client.aliases.get(command));

    // Se existir o comando o bot executará o comando usando a function "run"
    if (commandFile) commandFile.run(client, message, args)
    
}
