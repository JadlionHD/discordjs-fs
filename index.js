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
});

// ok next is im going to make a example of fs
client.on('message', message => {
	const readsystem = fs.readFileSync("./example.txt", "utf8");
	if (message.content == "/example") {
		message.channel.send(readsystem)
	}
	
});

client.on('message', message => {
    if (message.content === "/avatar") {
		const embed = new RichEmbed()
		.setTitle('Avatar!')
		.setAuthor("Your Avatar", message.author.avatarURL)
		.setImage(message.author.avatarURL)
		.setColor('RANDOM')
		.setDescription('Avatar URL')
      message.reply(embed)
    }
});






// now this is a token to make it alive tho
client.login("your token goes here");