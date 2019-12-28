module.exports = async (client, message) => {
 var m = await message.channel.send(`Calculando...`);
 m.edit(`Concluído! Latência é ${m.createdTimestamp - message.createdTimestamp}ms` +
 ` API Latência é ${Math.round(client.ping)}ms`);
};
