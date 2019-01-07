exports.run = (bot, msg) => {
	bot.config = require('../config.json');
	bot.awaitConsoleInput();
	bot.setupScore();

	bot.user.setPresence({ status: 'online', game: { name: 'with boba!!', type: 0 } });

	bot.log(`${bot.user.username} is online and ready to serve in ${bot.channels.size} channels on ${bot.guilds.size} servers!`);
}