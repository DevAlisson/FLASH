const Discord = require('discord.js');

exports.run = async (client,message,args) => {
    message.delete();
// inside a command, event listener, etc.
const exampleEmbed = new Discord.RichEmbed()
    .setColor('BLACK')
    .setTitle('Exemplo - Ajuda')
    .setDescription('Meus Comandos Abaixo')
    .addField('Comando De Banir - <a:Certo:660294146803761194>', "`t!ban` **ou** `t!punir`")
    .addField('Comando De Avatar - <a:Certo:660294146803761194>', "`t!avatar` **ou** `t!foto`")
    .addField('Comando De Ping - <a:Certo:660294146803761194>', "`t!ping` **ou** `t!latencia`")
    .addField('Comando De Limpar Chat - <a:Certo:660294146803761194>', "`t!ajuda`**ou** `t!help`")
    .setFooter('Some footer text here', 'https://i.imgur.com/0dG2g3t.png');

message.channel.send(exampleEmbed)
}

exports.config = {
    name: "ajuda",
    aliases: ["help"]
}