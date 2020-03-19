# Message-Handler (NodeJs)
Easier and simpler command handling!
No longer need to restart your bot when your editing a command or want to add/remove one^^

Features:
- built in reload function(instead of restarting bot do reload to load in all your commands).
- built in commands function(to show all loaded commands).
- 2 commands included in the command foler(userinfo.js and ping.js).
Do prefix commands to see all commands.

Wanna add more commands to your bot? Just look at one of the commands and see how i managed to do it^^

## How to get started
### 1. Download the "Message-Handler" repository.

### 2. Move the folder MsgModule into your bot folder.

### 3. Add some line of code to your main bot file (bot.js)

At the top add these lines:
```var jsfiles;
client.commands = new Discord.Collection();
var Collection = client.commands;
const fs = require("fs");
```
So it becomes something like this
<img>[![CodeTop](https://wad0.000webhostapp.com/images/Msg-Handler/MsgHandlerJsTop.PNG)](https://wad0.000webhostapp.com/images/Msg-Handler/MsgHandlerJsTop.PNG)

Then under "client.on('ready', () => {" or "bot.on('ready', () => {" put this:
   ```[jsfiles, Collection] = require("./MsgModule/MsgHandler.js").GetCommands(client);```
like this
<img>[![CodeReady](https://wad0.000webhostapp.com/images/Msg-Handler/MsgHandlerJsReady.PNG)](https://wad0.000webhostapp.com/images/Msg-Handler/MsgHandlerJsReady.PNG)

Finnaly we add the last bit of code needed to get it to work. which is under the "client.on('message', message => {" or "bot.on('message', message => {".
```var Collection2  = require("./MsgModule/MsgHandler.js").run(client, message, prefix, jsfiles, ChannelPost, Collection);```
```Collection = Collection2;```
	
like this
<img>[![CodeMsg](https://wad0.000webhostapp.com/images/Msg-Handler/MsgHandlerJsMsg.PNG)](https://wad0.000webhostapp.com/images/Msg-Handler/MsgHandlerJsMsg.PNG)

### 4. DONE^^


## Join Me
<img>[![DiscordLink](https://wad0.000webhostapp.com/images/Logo_WiAD.png)](https://discord.io/JrHcNuE)



