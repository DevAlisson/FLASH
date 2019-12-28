const Discord = require("discord.js");

exports.run = async (client,message,args) => {
  message.delete();
  if(message.channel.id === '639225395576832043' || '639232766780768266'){//sala comandos
  let usuario = message.mentions.users.first() || message.author;
  //sala de comandos-de-bot
      let av = usuario.displayAvatarURL;
      if(av.endsWith('.gif')) {
        av = `${usuario.displayAvatarURL}?size=2048`
      }
        
      let embed = new Discord.RichEmbed()
      .setColor('36393e')
      .setDescription(`📸 [**${usuario.username}**](${av})`)
      .setImage(av)
      message.channel.send(embed);
      let membro = message.author;
      //sala de logs
      message.guild.channels.get('639521022709596181').send( 'O ' + membro + ' usou o comando **AVATAR** na sala comandos');
    }else{
      let membro = message.author;
      message.channel.send(`${membro} - Voçê Não Pode Mandar Comandos Aqui. Escreva Na Sala De Comandos.`);
      //sala de logs
      message.guild.channels.get('639521022709596181').send( 'O ' + membro + ' tentou usar o comando **avatar** numa sala sem ser a de comandos');
    }
  }

exports.config = {
    name: "avatar",
    aliases: []
}