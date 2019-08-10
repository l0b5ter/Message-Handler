const Discord = require("discord.js");
var jsfiles;
var jsfiles2;

module.exports.GetCommands = (client) => {
let jsfiles;
let Arrcommand;
client.commands = new Discord.Collection();

const fs = require("fs");
let files;
try {
    files = fs.readdirSync('./MsgModule/Command');
} catch (error) {
    console.log(error);
}
	    jsfiles = [];
	    jsfiles = files.filter(file => file.endsWith('.js'))
            console.log('Loading ' + jsfiles.length + ' commands!');
	    jsfiles.forEach((file, i) => {
		let Arrcommand;
                try {
                    Arrcommand = require("./Command/" + file);
		    client.commands.set(Arrcommand.help.name, Arrcommand);
		} catch (error) {
                    return console.error('Failed to load command file ' + file + ':' + error);
                }
	});
var Collection = client.commands;
return jsfiles;	
};

module.exports.run = (client, message, prefix, jsfiles2, ChannelPost, Collection) => {	
	if (!jsfiles || !jsfiles.length) {
		jsfiles = jsfiles2;
	}
	if (message.content.startsWith(prefix)) {
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
		console.log(command);
		const cmd = Collection.get(command);
		if (command.startsWith("reload")) {
			for(y = -1; y < (jsfiles.length-1); y++){
				var NoFileEnding = jsfiles[y+1].split(".");
				delete require.cache[require.resolve("./Command/" + NoFileEnding[0] + ".js")];
				Collection.delete(NoFileEnding[0]);
			}
			jsfiles = require("./MsgHandler.js").GetCommands(client);
			let embed = new Discord.RichEmbed()
				.setColor(0x0079a8)
				.setAuthor(jsfiles.length + " commands loaded!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTVSzdCGu6MjAn94W4YvAVHuts6o2ggLGeyFfsxjF50rpwkbmP")				
			client.channels.find(channel => channel.name === ChannelPost).send({embed: embed});	
		}
		if (command.startsWith("commands")) {
			let embed = new Discord.RichEmbed()
				.setColor(0x0079a8)
				.setTitle("**__Command list__**")
				for(x = -1; x < (jsfiles.length-1); x++){
				var NoFileEnding = jsfiles[x+1].split(".");
				const cmd = client.commands.get(NoFileEnding[0]);
				embed.addField(cmd.help.name, cmd.help.desc)
				}
			client.channels.find(channel => channel.name === ChannelPost).send({embed: embed});
		}
		if (cmd) {
			cmd.run(client, message, args);
		}
	}
	return Collection;
};

module.exports.help = {
	name: "MsgModule",
	desc: "Easier and simpler command handling!"
};