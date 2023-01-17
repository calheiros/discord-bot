const { Client, GatewayIntentBits }  = require('discord.js');
const { config, commands } = require('./config/config');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	]
});

client.on('ready', () => {
	console.log('Logged in as ' + client.user.tag);
	console.log("Bot id: " + client.user.id);
	console.table(commands);
	client.on('messageUpdate', (msg) => console.log(`m̀essage update: ${msg.console}}`));
});

client.on('interactionCreate', interaction => {
    console.log(`interaction: ${interaction}`);
});

client.on("messageCreate", async msg => {
	console.log(`received message: ${msg.content}`);
	let prefix = "!";

	if (msg.author.bot || !msg.content.startsWith(prefix)) return;
	const userCmd = msg.content.slice(prefix.length);
	let dm;
	switch (userCmd) {
		case (commands.hello):
			msg.channel.send('hello dear! I see you message');
			break;
		case (commands.getName):
			msg.channel.send(msg.author.username);
			break;
		case (commands.sad):
			msg.channel.send(":(");
			break;
		case (commands.private):
			dm = await msg.author.createDM();
			dm.send("hello dear");
			break;
		case (commands.help):
			msg.channel.send(`avaible commands:\n ${commands}`);
			break;
		default:
			msg.channel.send('I do not understand your command');
		break
	}
});

client.on('error', (error) => {
    console.error(error);
});

client.on('debug', (log) => console.log(log));

module.exports = () => {
	client.login(config.DISCORD_TOKEN);
}

