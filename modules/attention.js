const Discord = require("discord.js");

module.exports = {
	name: 'attention',
	permission: 1,
	main: function(bot, msg, get, sendMessage) {
        if (msg.author.id == '457863449502810113') {
            msg.reply("your request has been sent to your boyfriend! <3");
		    var request = new Discord.RichEmbed()
			    .setColor(0x1675DB)
			    .setAuthor(msg.author.username, msg.author.avatarURL)
			    .addField('Attention Request:', msg.content)
			    .setFooter(bot.user.username, bot.user.avatarURL)
			    .setTimestamp()
        
            bot.users.get('133350262420013056').createDM()    
		    bot.users.get('133350262420013056').send({embed:request});
	
		    msg.delete();
        } else {
            msg.reply("hmm, you don't look like Mahal to me...")
        }
    }
};