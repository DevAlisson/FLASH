const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require("snekfetch")
exports.run = async (client, message, args) => {
 if (message.mentions.users.size < 1) return message.channel.send("Você não pode abraçar ninguem")
 let user = message.guild.member(message.mentions.users.first());
 snekfetch.get('https://nekos.life/api/hug')
 .set('Key', 'dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf')
 .then(r => message.channel.send(`${user} Você recebeu um abraço de ${message.author.username} ❤`,{
 embed: {
 image: {
 url: r.body.url
 }
 }
 }))
}

exports.config = {
    name: "abracar",
    aliases: ["hug"]
}