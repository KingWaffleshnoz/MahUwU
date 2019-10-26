const config = require("../config.json");
const fs = require("fs");

exports.run = (bot, msg) => {
	if (msg.channel.type === "dm" && msg.author.id == bot.user.id)
		console.log("[DM] " + bot.user.username + " -> " + msg.channel.recipient.username + " | " + msg.content)
	else if (msg.channel.type === "dm" && msg.author.id != bot.user.id)
		console.log("[DM] " + msg.channel.recipient.username + " -> " + bot.user.username + " | " + msg.content)

	if (!msg.channel.type === "text" || !msg.guild || msg.author.bot) return;

	bot.processMessage(msg);

	//reply array shenanigans
	const responseObject = {
		
	};
	if (responseObject[msg.content.toLowerCase()]) {
		msg.channel.send(responseObject[msg.content.toLowerCase()]);
	}

	const msg1 = msg.content.toLowerCase();
	//includes
	if (msg1.includes("uwu")) {
		msg.channel.send("uwu")
	}
	if (msg1.includes("ayuh")) {
		msg.channel.send("aYUH!!!")
	}
	if (msg1.includes("play despacito")) {
		msg.channel.send("`Playing 'Despacito' by Luis Fonsi...`\nhttps://www.youtube.com/watch?v=kJQP7kiw5Fk")
	}
	if (msg1.includes("hewwo")) {
		msg.channel.send("(;•́︿•̀ ;) Hewwo??")
	}
	
	//palindrome
	if (msg1.length() == 3) {
		let s1 = msg1.substring(0, 1);
		let s2 = msg1.substring(2, 1);

		if (s1 == s2) {
			msg.channel.send(msg1);
		}
	}

	//score writes
	if (!bot.score[msg.author.id] && msg.channel.id != '479903283390185477') {
		var roll = Math.floor((Math.random() * 20));
		bot.score[msg.author.id].score += roll;
		bot.score[msg.author.id].lastMessage = new Date();
	} else {
		if (new Date() - new Date(bot.score[msg.author.id].lastMessage) >= 60000 && msg.channel.id != '479903283390185477') {
			var roll = Math.floor((Math.random() * 20));
			bot.score[msg.author.id].score += roll;
			bot.score[msg.author.id].lastMessage = new Date();
		}
	}
}