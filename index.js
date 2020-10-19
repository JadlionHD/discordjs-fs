// this tempelate using some fs and discord.js
// yeah only that
// to making bot
// this is would be changed
const Discord = require ("discord.js");
const client = new Discord.Client({disableEveryone: true});
const { Client, RichEmbed, Attachment } = require('discord.js');
const fs = require ("fs");


// alright lets go
// this code to make the bot alive
client.on('ready', () => {
	// now this is console log that appear while the terminal/cmd activated
	// make sure that you already put token of your bot to make it alive, in the bottom.
	console.log("Bot are now activated")
	// now this is a something like set a "Playing" status into your bot
	client.user.setActivity("Hello im BOT!")
});

// now for the command i will make some example of it like "Ping"
// im tired making any text like this
client.on('message', message => {
	const ping = Math.round(client.ping);
	if (message.content === '/ping') {
		message.channel.send('**Pong!**').then(message => {
			message.edit("**Pong!** Bot Latency : ``" + ping + "ms``")
		})
	}
	if (message.content == "/example") {
		const readsystem = fs.readFileSync("./example.txt", "utf8");
		message.channel.send(readsystem)
	}
});





// now this is a token to make it alive tho
client.login("your token goes here");
