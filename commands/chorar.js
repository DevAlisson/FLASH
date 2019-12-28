const Discord = require("discord.js");
exports.run = async (client, message, args) => {
let defineduser = message.mentions.users.first();

 if(!defineduser) {
 var Embed = new Discord.RichEmbed()
 .setColor(`#8B008B`)
 .setDescription(`**${message.author}** não se preocupe vai ficar tudo bem (╥﹏╥)`)
 .setImage('https://media.tenor.com/images/b47ed7ef3e048752fd470354f9fd2a80/tenor.gif')
 .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL).setTimestamp()

 message.channel.send(Embed)
 } else {
 
 var Embed = new Discord.RichEmbed()
 .setColor(`#8B008B`)
 .setDescription(`**${message.author}** fez **${defineduser}** chorar (╥﹏╥)`)
 .setImage('https://media.tenor.com/images/b47ed7ef3e048752fd470354f9fd2a80/tenor.gif')
 .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL).setTimestamp()

 message.channel.send(Embed)
 }
}

exports.config = {
    name: "chorar",
    aliases: ["cry"]
}