const Discord = require('discord.js')
const config = require('./config.js')
const client = new Discord.Client()
const fs = require('fs')

client.commands  = new Discord.Collection(); // Collection Comandos
client.aliases   = new Discord.Collection(); // Collection Aliases

// { HANDLER's }

// [Events]

fs.readdir("./events/", (err, files) => { // Aqui o fs estará fazendo a leitura dos eventos que estão na pasta "events".
    if (err) return console.error(`ERRO/EVENT => \n${err}`); // Se houver erro nos eventos o bot mandará no console o problema.
    files.forEach(file => {        
        let eventFunction = require(`./events/${file}`); // Definição do evento.
        let eventName = file.split(".")[0]; // Nome do Evento.        
        client.on(eventName, (...args) => eventFunction.run(client, ...args)); // Aqui o bot organiza que para cada evento tem uma função diferente.
    });
});

// [Commands]

fs.readdir("./commands/", (err, files)=> { // O fs faz leitura dos comandos que estão na pasta respectiva.
    if(err) return console.log(`ERRO/COMMAND =>\n${err}`); // Se houver erro algum erro no comandos o bot mandará no console o problema.    
    let jsfile = files.filter(f => f.split(".").pop() === "js") // Difinição dos arquivos com .js dos sem .js
    if(jsfile.length <= 0) return console.log('ERRO/COMMANDS => Nenhum comando.')        
    jsfile.forEach((f, i) => {        
        let pull = require(`./commands/${f}`); // Definição do Comando.
        client.commands.set(pull.config.name, pull); // Setamos o nome do comando que está no collection do comando.
        pull.config.aliases.forEach(alias => { // Aqui definimos que existe aliases para cada comando.
            client.aliases.set(alias, pull.config.name) // Setamos às aliases do comando que está no collection do aliases.
        });
    });
});

client.login(config.TOKEN).then(() => {
  console.log(`ONLINE => ${client.user.username} iniciado.`) // Quando o bot ligar por completo ele enviará um mensagem no console.
}).catch(e => {
  console.log(`OFFLINE => Falha ao inicar o bot.\n${e}`) // Caso houver erro no TOKEN do bot ele enviará uma mensagem com o respectivo erro no console.
});