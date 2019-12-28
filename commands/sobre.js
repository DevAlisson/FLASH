const Discord = require('discord.js');

exports.run = async (client,message,args) => {

// inside a command, event listener, etc.
const exampleEmbed = new Discord.RichEmbed()
.setColor('RANDOM')
    .setTitle('Flash™ ⚡')
    .setDescription('**Olá sou o Flash™ ⚡, um bot de anúncios DM,moderação,diversão,nsfw, etc... **')
    .addField('😋Me adicione em seu servidor:', url='https://discordapp.com/api/oauth2/authorize?client_id=660266814940381184&permissions=8&scope=bot')
    .addField(':pushpin:Caso você esteja pensando:', "**Nossa ela tem permissão de adm ela vai derrubar meu servidor.**")
    .addField('📌 Se estiver com medo é só tirar as minhas permissões pois preciso só das permissões de: ', "**Ler, escrever e gerenciar mensagens,banir membros(opicional),gerenciar cargos,etc**")
    .addField("📌**Quer ter uma coisa top so sua no bot?**", url='https://discord.gg/VSd8UaM' )
    .setFooter('Obrigado Por Usar O Flash!', 'https://cdn.discordapp.com/attachments/660264223242190867/660317756310290444/Logo_-_Flash_1v.png');

message.channel.send(exampleEmbed)
}

exports.config = {
    name: "sobre",
    aliases: ["about"]
}
