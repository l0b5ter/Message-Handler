const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	message.channel.send(`---->Pong! \nLatency is ${(message.createdTimestamp - Date.now())-2000}ms. \nAPI Latency is ${Math.round(client.ping)}ms`);
};

module.exports.help = {
	name: "ping",
	desc: "Average latency between the bot and the websocket server (one-way, not round-trip)"
};