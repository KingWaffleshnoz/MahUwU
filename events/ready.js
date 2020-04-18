exports.run = (bot, msg) => {
	bot.config = require('../config.json');
	bot.awaitConsoleInput();
	bot.setupScore();

	bot.user.setPresence({ status: 'online', activity: { name: 'with boba!!', type: 0 } });

	bot.log(`${bot.user.username} is online and ready to serve in ${bot.channels.cache.size} channels on ${bot.guilds.cache.size} servers!`);
}