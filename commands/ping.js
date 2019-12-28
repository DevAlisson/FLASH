module.exports.run = async (client, message) => {
    var m = await message.channel.send(`Calculando... <a:loading:660292090210680889> `);
    m.edit(`** Concluído! Latência é ${m.createdTimestamp - message.createdTimestamp}ms ` +` API Latência é ${Math.round(client.ping)}ms ** <a:certo:660294146803761194>   `);
   };

   exports.config = {
       name: "ping",
       aliases: []
   }

   