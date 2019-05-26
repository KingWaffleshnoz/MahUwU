const Discord = require('discord.js');
const bot = new Discord.Client(require("./config.json").opts);
require('./funcs.js')(bot);
const readdir = require("fs").readdir;

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

readdir('./fun/', (err, files) => {
	bot.log(`Loading ${files.length} modules!`);
	files.forEach(f => {
		try {
			var name = require(`./fun/${f}`).name
			bot.commands.set(name, require(`./fun/${f}`));
		} catch (e) {
			bot.log(`Unable to load command ${f}: ${e}`);
		}
	});
	bot.log(`Fun modules loaded!`);
});

readdir('./info/', (err, files) => {
	bot.log(`Loading ${files.length} modules!`);
	files.forEach(f => {
		try {
			var name = require(`./info/${f}`).name
			bot.commands.set(name, require(`./info/${f}`));
		} catch (e) {
			bot.log(`Unable to load command ${f}: ${e}`);
		}
	});
	bot.log(`Info modules loaded!`);
});

readdir('./misc modules/', (err, files) => {
	bot.log(`Loading ${files.length} modules!`);
	files.forEach(f => {
		try {
			var name = require(`./misc modules/${f}`).name
			bot.commands.set(name, require(`./misc modules/${f}`));
		} catch (e) {
			bot.log(`Unable to load command ${f}: ${e}`);
		}
	});
	bot.log(`Miscallaneous modules loaded!`);
});

readdir('./moderation/', (err, files) => {
	bot.log(`Loading ${files.length} modules!`);
	files.forEach(f => {
		try {
			var name = require(`./moderation/${f}`).name
			bot.commands.set(name, require(`./moderation/${f}`));
		} catch (e) {
			bot.log(`Unable to load command ${f}: ${e}`);
		}
	});
	bot.log(`Moderation modules loaded!`);
});

readdir('./score/', (err, files) => {
	bot.log(`Loading ${files.length} modules!`);
	files.forEach(f => {
		try {
			var name = require(`./score/${f}`).name
			bot.commands.set(name, require(`./score/${f}`));
		} catch (e) {
			bot.log(`Unable to load command ${f}: ${e}`);
		}
	});
	bot.log(`Scoring odules loaded!`);
});

readdir('./events/', (err, files) => {
	bot.log(`Loading ${files.length} events!`);
	files.forEach(file => {
		bot.on(file.split(".")[0], (...args) => {
			require(`./events/${file}`).run(bot, ...args);
		});
	});
	bot.log(`Events loaded!`);
});

bot.login(require("./config.json").token);

var restart;
bot.on('ready', () => {
    restart = bot.channels.find('id', '465742371670327296'); // Channel to send notification
});

const TARGET_HOUR_R = 2; 
const TARGET_MINUTE_R = 20; 

setInterval(function() {
    var d2 = new Date();
	if(d2.getMinutes() !== TARGET_MINUTE_R || d2.getHours() !== TARGET_HOUR_R) return; // Return if current minute is not the notify minute
	setTimeout(function() {
		process.exit();
	}, 1000);
	restart.send("[AUTO RESTART] | MahUwU successfully restarted!")
}, 60 * 1000); // Check every minute

bot.login(require("./config.json").token);